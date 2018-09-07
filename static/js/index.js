$(document).ready(function(){
    // window.onload = function() {
    var editor = CodeMirror.fromTextArea(document.getElementById("code-python"), {
        lineNumbers: true,
        mode: "python",
        matchBrackets: true,
        foldGutter: true,
        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]

      });
    // };
    

    $('#evaluate_button_id').click(function(){
        // get user inputted code
        var code_input = editor.getValue();
        // console.log(code_input);
        var review_url = '/api/analyze_code/py';
        // console.log(review_url);
        $.post(review_url, {code: code_input}, function(code_input){
            console.log('Code has been uploaded.');
            // $('#code_review').text(data);
        });
        // TODO this get may take a very long time if the program is huge...
        // Need a for loop to check if get has been done...
        $.get(review_url, function(data){
            $('#code_review').text(data);
        });
    });


});

