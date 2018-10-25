function show() {
    let field = $('#password');
    field.attr('type') === 'text'? field.attr('type', 'password') : field.attr('type', 'text');
}