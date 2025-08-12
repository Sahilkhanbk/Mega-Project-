import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'

export default function RTE({ name, control, label, defaultValue = " " }) {
    return (

        <div className='w-full '>
            {label && <label className=' inline-block mb-1 pl-1'>{label}</label>}

            <Controller
                name={name || "content"}
                control={control}
                render={({ field: { onchange } }) => (
                    <Editor

                        initialValue={defaultValue}
                        init={
                            {
                                initialValue: defaultValue,
                                branding: false,
                                height: 500,
                                menubar: true,
                                plugins: [
                                    "image",
                                    "advlist",
                                    "autolink",
                                    "lists",
                                    "link",
                                    "image",
                                    "charmap",
                                    "preview",
                                    "anchor",
                                    "searchreplace",
                                    "visulblocks",
                                    "code",
                                    "insertdatetime",
                                    "fullscreen",
                                    "media",
                                    "table",
                                    "code",
                                    "help",
                                    "wordcount",
                                    "anchor",
                                ],
                                toolbar:
                                    'undo redo | formatselect | bold italic backcolor| \ alignleft aligncenter  alignright alignjustify |\ bullist numlist qutdent indent | removeformat | help ',
                                content_style: "body { font-damily:Helvetica, Arial , sans-serif ; font-size:14px}"
                            }}
                        onEditorChange={onchange}
                    />
                )} />

        </div>

    )
}