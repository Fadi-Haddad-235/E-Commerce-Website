window.onload=function(){

    let user_name;
    sessionStorage.setItem(user_name,"fadi");

    const logged_user = sessionStorage.getItem(user_name);

    console.log(logged_user);

    
}