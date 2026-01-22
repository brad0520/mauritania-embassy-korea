'use client'

import React, { useCallback, useRef, useEffect } from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import Link from '@tiptap/extension-link'
import Placeholder from '@tiptap/extension-placeholder'
import TextAlign from '@tiptap/extension-text-align'
import { uploadFile } from '@/lib/supabase'

interface RichTextEditorProps {
  content: string
  onChange: (content: string) => void
  placeholder?: string
  locale?: string
}

// 에디터 다국어 지원
const editorTranslations: Record<string, Record<string, string>> = {
  ko: {
    bold: '굵게',
    italic: '기울임',
    strike: '취소선',
    heading1: '제목 1',
    heading2: '제목 2',
    heading3: '제목 3',
    bulletList: '글머리 기호',
    orderedList: '번호 매기기',
    alignLeft: '왼쪽 정렬',
    alignCenter: '가운데 정렬',
    alignRight: '오른쪽 정렬',
    addLink: '링크 추가',
    uploadImage: '이미지 업로드',
    horizontalRule: '구분선',
    undo: '실행 취소',
    redo: '다시 실행',
    enterUrl: 'URL을 입력하세요:',
    fileSizeError: '파일 크기는 5MB를 초과할 수 없습니다.',
    imageOnlyError: '이미지 파일만 업로드할 수 있습니다.',
    uploadFailed: '이미지 업로드에 실패했습니다.',
    placeholder: '내용을 입력하세요...'
  },
  en: {
    bold: 'Bold',
    italic: 'Italic',
    strike: 'Strikethrough',
    heading1: 'Heading 1',
    heading2: 'Heading 2',
    heading3: 'Heading 3',
    bulletList: 'Bullet List',
    orderedList: 'Numbered List',
    alignLeft: 'Align Left',
    alignCenter: 'Align Center',
    alignRight: 'Align Right',
    addLink: 'Add Link',
    uploadImage: 'Upload Image',
    horizontalRule: 'Horizontal Rule',
    undo: 'Undo',
    redo: 'Redo',
    enterUrl: 'Enter URL:',
    fileSizeError: 'File size cannot exceed 5MB.',
    imageOnlyError: 'Only image files can be uploaded.',
    uploadFailed: 'Image upload failed.',
    placeholder: 'Enter content here...'
  },
  fr: {
    bold: 'Gras',
    italic: 'Italique',
    strike: 'Barré',
    heading1: 'Titre 1',
    heading2: 'Titre 2',
    heading3: 'Titre 3',
    bulletList: 'Liste à puces',
    orderedList: 'Liste numérotée',
    alignLeft: 'Aligner à gauche',
    alignCenter: 'Centrer',
    alignRight: 'Aligner à droite',
    addLink: 'Ajouter un lien',
    uploadImage: 'Télécharger une image',
    horizontalRule: 'Ligne horizontale',
    undo: 'Annuler',
    redo: 'Rétablir',
    enterUrl: 'Entrez l\'URL:',
    fileSizeError: 'La taille du fichier ne peut pas dépasser 5 Mo.',
    imageOnlyError: 'Seuls les fichiers image peuvent être téléchargés.',
    uploadFailed: 'Le téléchargement de l\'image a échoué.',
    placeholder: 'Entrez le contenu ici...'
  },
  ar: {
    bold: 'غامق',
    italic: 'مائل',
    strike: 'يتوسطه خط',
    heading1: 'عنوان 1',
    heading2: 'عنوان 2',
    heading3: 'عنوان 3',
    bulletList: 'قائمة نقطية',
    orderedList: 'قائمة مرقمة',
    alignLeft: 'محاذاة لليسار',
    alignCenter: 'توسيط',
    alignRight: 'محاذاة لليمين',
    addLink: 'إضافة رابط',
    uploadImage: 'تحميل صورة',
    horizontalRule: 'خط أفقي',
    undo: 'تراجع',
    redo: 'إعادة',
    enterUrl: 'أدخل الرابط:',
    fileSizeError: 'حجم الملف لا يمكن أن يتجاوز 5 ميجابايت.',
    imageOnlyError: 'يمكن تحميل ملفات الصور فقط.',
    uploadFailed: 'فشل تحميل الصورة.',
    placeholder: 'أدخل المحتوى هنا...'
  }
}

export default function RichTextEditor({
  content,
  onChange,
  placeholder,
  locale = 'ko'
}: RichTextEditorProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const t = editorTranslations[locale] || editorTranslations.ko
  const actualPlaceholder = placeholder || t.placeholder

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3]
        }
      }),
      Image.configure({
        HTMLAttributes: {
          class: 'max-w-full h-auto rounded-lg my-4'
        }
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-blue-600 underline hover:text-blue-800'
        }
      }),
      Placeholder.configure({
        placeholder: actualPlaceholder
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph']
      })
    ],
    content,
    immediatelyRender: false, // SSR 호환성
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose max-w-none focus:outline-none min-h-[300px] p-4'
      }
    }
  })

  // content prop 변경 시 에디터 내용 업데이트 (언어 탭 전환 시)
  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content)
    }
  }, [editor, content])

  const handleImageUpload = useCallback(async (file: File) => {
    if (!editor) return

    // 파일 크기 체크 (5MB 제한)
    if (file.size > 5 * 1024 * 1024) {
      alert(t.fileSizeError)
      return
    }

    // 이미지 타입 체크
    if (!file.type.startsWith('image/')) {
      alert(t.imageOnlyError)
      return
    }

    // Supabase 설정 확인
    const isSupabaseConfigured =
      process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_URL !== 'https://dummy-project.supabase.co'

    if (isSupabaseConfigured) {
      // Supabase Storage에 업로드
      try {
        const timestamp = Date.now()
        const fileName = `${timestamp}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`
        const result = await uploadFile('news-images', fileName, file)

        if (result.url) {
          editor.chain().focus().setImage({ src: result.url }).run()
        }
      } catch (error) {
        console.error('Image upload failed:', error)
        alert(t.uploadFailed)
      }
    } else {
      // 개발 환경: Base64로 변환하여 인라인 삽입
      try {
        const reader = new FileReader()
        reader.onload = (e) => {
          const base64 = e.target?.result as string
          if (base64) {
            editor.chain().focus().setImage({ src: base64 }).run()
          }
        }
        reader.onerror = () => {
          alert(t.uploadFailed)
        }
        reader.readAsDataURL(file)
      } catch (error) {
        console.error('Image conversion failed:', error)
        alert(t.uploadFailed)
      }
    }
  }, [editor, t])

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      handleImageUpload(file)
    }
    // 같은 파일 재선택 가능하도록 초기화
    e.target.value = ''
  }, [handleImageUpload])

  const addLink = useCallback(() => {
    if (!editor) return
    const url = window.prompt(t.enterUrl)
    if (url) {
      editor.chain().focus().setLink({ href: url }).run()
    }
  }, [editor, t])

  if (!editor) {
    return null
  }

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden bg-white">
      {/* 툴바 */}
      <div className="flex flex-wrap gap-1 p-2 border-b border-gray-200 bg-gray-50">
        {/* 텍스트 스타일 */}
        <div className="flex gap-1 border-r border-gray-300 pr-2 mr-1">
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`p-2 rounded hover:bg-gray-200 ${editor.isActive('bold') ? 'bg-gray-200' : ''}`}
            title={t.bold}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path d="M6 4h8a4 4 0 014 4 4 4 0 01-4 4H6z" />
              <path d="M6 12h9a4 4 0 014 4 4 4 0 01-4 4H6z" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`p-2 rounded hover:bg-gray-200 ${editor.isActive('italic') ? 'bg-gray-200' : ''}`}
            title={t.italic}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 4h4l-4 16h4" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={`p-2 rounded hover:bg-gray-200 ${editor.isActive('strike') ? 'bg-gray-200' : ''}`}
            title={t.strike}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5c-1.5 0-3 .5-3 2.5s1.5 2.5 3 2.5 3 .5 3 2.5-1.5 2.5-3 2.5" />
            </svg>
          </button>
        </div>

        {/* 제목 */}
        <div className="flex gap-1 border-r border-gray-300 pr-2 mr-1">
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            className={`p-2 rounded hover:bg-gray-200 text-sm font-bold ${editor.isActive('heading', { level: 1 }) ? 'bg-gray-200' : ''}`}
            title={t.heading1}
          >
            H1
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={`p-2 rounded hover:bg-gray-200 text-sm font-bold ${editor.isActive('heading', { level: 2 }) ? 'bg-gray-200' : ''}`}
            title={t.heading2}
          >
            H2
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            className={`p-2 rounded hover:bg-gray-200 text-sm font-bold ${editor.isActive('heading', { level: 3 }) ? 'bg-gray-200' : ''}`}
            title={t.heading3}
          >
            H3
          </button>
        </div>

        {/* 리스트 */}
        <div className="flex gap-1 border-r border-gray-300 pr-2 mr-1">
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={`p-2 rounded hover:bg-gray-200 ${editor.isActive('bulletList') ? 'bg-gray-200' : ''}`}
            title={t.bulletList}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              <circle cx="2" cy="6" r="1" fill="currentColor" />
              <circle cx="2" cy="12" r="1" fill="currentColor" />
              <circle cx="2" cy="18" r="1" fill="currentColor" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={`p-2 rounded hover:bg-gray-200 ${editor.isActive('orderedList') ? 'bg-gray-200' : ''}`}
            title={t.orderedList}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 6h13M8 12h13M8 18h13" />
              <text x="2" y="8" fontSize="6" fill="currentColor">1</text>
              <text x="2" y="14" fontSize="6" fill="currentColor">2</text>
              <text x="2" y="20" fontSize="6" fill="currentColor">3</text>
            </svg>
          </button>
        </div>

        {/* 정렬 */}
        <div className="flex gap-1 border-r border-gray-300 pr-2 mr-1">
          <button
            type="button"
            onClick={() => editor.chain().focus().setTextAlign('left').run()}
            className={`p-2 rounded hover:bg-gray-200 ${editor.isActive({ textAlign: 'left' }) ? 'bg-gray-200' : ''}`}
            title={t.alignLeft}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h12M3 18h18" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().setTextAlign('center').run()}
            className={`p-2 rounded hover:bg-gray-200 ${editor.isActive({ textAlign: 'center' }) ? 'bg-gray-200' : ''}`}
            title={t.alignCenter}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M6 12h12M3 18h18" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().setTextAlign('right').run()}
            className={`p-2 rounded hover:bg-gray-200 ${editor.isActive({ textAlign: 'right' }) ? 'bg-gray-200' : ''}`}
            title={t.alignRight}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M9 12h12M3 18h18" />
            </svg>
          </button>
        </div>

        {/* 링크 & 이미지 */}
        <div className="flex gap-1">
          <button
            type="button"
            onClick={addLink}
            className={`p-2 rounded hover:bg-gray-200 ${editor.isActive('link') ? 'bg-gray-200' : ''}`}
            title={t.addLink}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="p-2 rounded hover:bg-gray-200 bg-blue-50 text-blue-600 hover:bg-blue-100"
            title={t.uploadImage}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
          />
        </div>

        {/* 구분선 */}
        <div className="flex gap-1 ml-auto">
          <button
            type="button"
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
            className="p-2 rounded hover:bg-gray-200"
            title={t.horizontalRule}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().undo().run()}
            disabled={!editor.can().undo()}
            className="p-2 rounded hover:bg-gray-200 disabled:opacity-40"
            title={t.undo}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h10a4 4 0 014 4v1M3 10l4-4M3 10l4 4" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => editor.chain().focus().redo().run()}
            disabled={!editor.can().redo()}
            className="p-2 rounded hover:bg-gray-200 disabled:opacity-40"
            title={t.redo}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 10H11a4 4 0 00-4 4v1M21 10l-4-4M21 10l-4 4" />
            </svg>
          </button>
        </div>
      </div>

      {/* 에디터 영역 */}
      <EditorContent editor={editor} />

      {/* 스타일 */}
      <style jsx global>{`
        .ProseMirror {
          min-height: 300px;
          padding: 1rem;
          outline: none;
        }
        .ProseMirror p.is-editor-empty:first-child::before {
          content: attr(data-placeholder);
          float: left;
          color: #adb5bd;
          pointer-events: none;
          height: 0;
        }
        .ProseMirror img {
          max-width: 100%;
          height: auto;
          border-radius: 0.5rem;
          margin: 1rem 0;
        }
        .ProseMirror h1 {
          font-size: 1.875rem;
          font-weight: 700;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }
        .ProseMirror h2 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 1.25rem;
          margin-bottom: 0.5rem;
        }
        .ProseMirror h3 {
          font-size: 1.25rem;
          font-weight: 600;
          margin-top: 1rem;
          margin-bottom: 0.5rem;
        }
        .ProseMirror ul,
        .ProseMirror ol {
          padding-left: 1.5rem;
          margin: 0.5rem 0;
        }
        .ProseMirror ul {
          list-style-type: disc;
        }
        .ProseMirror ol {
          list-style-type: decimal;
        }
        .ProseMirror blockquote {
          border-left: 3px solid #e5e7eb;
          padding-left: 1rem;
          color: #6b7280;
          font-style: italic;
          margin: 1rem 0;
        }
        .ProseMirror hr {
          border: none;
          border-top: 2px solid #e5e7eb;
          margin: 1.5rem 0;
        }
        .ProseMirror code {
          background-color: #f3f4f6;
          padding: 0.125rem 0.375rem;
          border-radius: 0.25rem;
          font-family: monospace;
          font-size: 0.875em;
        }
      `}</style>
    </div>
  )
}
