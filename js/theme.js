function Submit(e){
    var comment_li = document.createElement('li');
    var data_li = document.createElement('li');
    var user_li = document.createElement('li');

    var comment_inp=document.getElementById('form-comment').value;
    var names_user=document.getElementById('name_user').value;
    var input=document.getElementById('input');

    var date = new Date();
    var options = {

        year: 'numeric',
        month: 'long',
        day: 'numeric',

    };

    if (e.ctrlKey && e.keyCode == 13 || e == 'button') {
        if (comment_inp && names_user) {

            user_li.innerHTML = document.getElementById('name_user').value ;
            user_li.classList.add('reviews-massege_name'); // имя пользователя
            list_massege.insertBefore(user_li, list_massege.lastChild);

            data_li.innerHTML = " " + date.toLocaleString("ru", options);
            data_li.classList.add('reviews-massege_data'); // дата
            list_massege.insertBefore(data_li, list_massege.lastChild);

            comment_li.innerHTML = document.getElementById('form-comment').value;
            comment_li.classList.add('reviews-massege_comment');  // коментарий
            list_massege.insertBefore(comment_li, list_massege.lastChild);
            document.getElementById('form-comment').value='';

        }
        else {
            return alert("plz write some things");
        }
    }
}
