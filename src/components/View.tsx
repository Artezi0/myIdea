import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"

import { UserAuth } from "../context/AuthContext"

export default function View({ title, body, bio, cover }) {
  const { getActive } = UserAuth()
  document.title = title 

  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content: getActive().body,  
  })

  return (
    <div className="view">
      {getActive().cover.isCover && 
        <div className="view__cover"></div>
      }
       <div className="view__avatar">
          <svg xmlns="http://www.w3.org/2000/svg" width="112" height="112" viewBox="0 0 112 112" className='edit__info-icon'>
            <g>
              <rect width="112" height="112" fill={getActive().profile.background} />
              <path
                d="M77.4624 78.9593C78.2802 68.3428 73.7143 58.8833 71.3291 55.4806L87.6847 48.335C92.5913 49.9683 94.1587 65.6887 94.3291 73.3448C94.3291 73.3448 90.7513 73.8552 88.7069 75.3864C86.6219 76.948 83.0847 80.4905 77.4624 78.9593Z"
                fill="white"
                stroke="#84B5D9"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M86.4336 58C87.3281 58 88.3914 58 88.3914 61C91.0574 61.9999 91.3914 67.5 85.3914 70C80.5914 72 79.3914 67.8333 79.3914 65.5C77.9336 64.5 77.6336 62.3 78.4336 61.5C79.2336 60.7 81.3914 61.5 81.8914 62.5L84.8914 61C84.3914 60.5 84.9336 58 86.4336 58H86.4336Z"
                fill="#B1DEFF"
              />
              <path
                d="M7.06239 52.159C-5.55748 54.1782 -12.682 66.0659 -17.661 73.2769C-18.5194 86.6687 -18.2791 114.379 -10.45 118.088C-2.62094 121.797 16.5053 119.633 25.0898 118.088V122.209C26.4634 122.724 30.1375 123.857 33.846 124.269C37.5545 124.681 40.542 123.067 41.5721 122.209V112.422C42.0872 112.079 44.5595 110.465 50.3283 106.756C57.5393 102.121 61.6598 90.274 60.1146 82.0331C58.9557 75.8521 63.7201 63.4904 66.2955 55.2493C76.0818 57.3094 88.4435 54.2192 89.4736 40.3124C90.1205 31.5801 80.7174 19.9868 63.2051 25.3752C45.6927 30.7636 48.268 52.159 41.5721 59.37C35.3913 53.1891 23.5446 49.5219 7.06239 52.159Z"
                fill={getActive().profile.theme[0]}
                stroke={getActive().profile.theme[2]}
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M66.2955 55.2493C64.5786 54.7342 60.9387 53.6011 60.1146 53.189"
                stroke={getActive().profile.theme[1]}
                strokeOpacity="0.37"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M41.5721 59.3698C40.8853 60.2283 38.8937 62.1512 36.4214 62.9753"
                stroke={getActive().profile.theme[1]}
                strokeOpacity="0.37"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <circle cx="68.8708" cy="42.8876" r="2.06028" fill="black" />
            </g>
          </svg>
        </div>   
      <div className="view__info">
        <h1>{title}</h1>
        <p>{bio}</p>
      </div>
      <EditorContent 
        className="view__body"
        editor={editor} 
        spellCheck={false}
        contentEditable='false'
      />
    </div>
  )
}