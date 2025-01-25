import React from 'react';
import { CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor  from '@ckeditor/ckeditor5-build-classic';
const editorConfiguration = {
  toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote' ] 
};
const CKEditorField = ({ field, setFieldValue,value, errors, ...props }) => {
  const classNames = `ckeditor-control ${errors[field] && 'is-invalid'}`;
  return (
    <CKEditor
      editor={ClassicEditor}
      config={ editorConfiguration }
      data={value}
      onChange={(event, editor) => {
        const data = editor.getData();
        // console.log( { event, editor, data } );
        setFieldValue(field, editor.getData());
      }}
      className={classNames}
      // onBlur={field.onBlur}
      {...props}
    />
  );
};
export default CKEditorField;