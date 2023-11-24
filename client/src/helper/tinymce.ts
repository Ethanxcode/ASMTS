import tinymce from "tinymce";

export const attacthTinymce = () => {
    const tinymceEditConfig = {
        selector: '.tinymce-edit',
        menubar: false,
        inline: true,
        plugins: ' mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist  casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste   typography inlinecss',
        toolbar: [
            ' fontfamily fontsize | bold italic underline | emoticons',
            'forecolor backcolor | alignleft aligncenter alignright alignfull lineheight | checklist numlist bullist outdent indent'
        ],
        valid_styles: {
            '*': 'font-size,font-family,color,text-decoration,text-align'
        },
        paste_block_drop: false,
        paste_data_images: true,
        powerpaste_word_import: 'clean',
        powerpaste_html_import: 'clean',
    };

    const emailHeaderConfig = {
        selector: '.tinymce-heading',
        menubar: false,
        inline: true,
        plugins: ' mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist  casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste   typography inlinecss',
        toolbar: ' fontfamily fontsize | bold italic underline  | emoticons',
        valid_styles: {
            '*': 'font-size,font-family,color,text-decoration,text-align'
        },

        powerpaste_word_import: 'clean',
        powerpaste_html_import: 'clean',
    };

    const tinymceCreateConfig = {
        selector: '.tinymce-create',
        menubar: false,
        // inline: true,
        statusbar: false,
        toolbar: [
            ' fontfamily fontsize | bold italic underline | emoticons',
            'forecolor backcolor | alignleft aligncenter alignright alignfull lineheight | checklist numlist bullist outdent indent | link image media  table '
        ],
        plugins: 'mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks  checklist  casechange export formatpainter pageembed permanentpen  advtemplate advtable advcode editimage tableofcontents mergetags powerpaste  typography inlinecss',
        // toolbar: '| blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight |  checklist numlist bullist indent outdent | emoticons forecolor backcolor  | ',
        valid_styles: {
            '*': 'font-size,font-family,color,text-decoration,text-align'
        },
        paste_block_drop: false,
        paste_data_images: true,
        powerpaste_word_import: 'clean',
        powerpaste_html_import: 'clean',
    }



    tinymce.init(tinymceCreateConfig);
    tinymce.init(tinymceEditConfig);
}
