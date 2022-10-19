function chick(){
    let na = document.forms['myform']['username'].value;
    let ps = document.forms['myform']['userpwd'].value;

    if(na == null || na == ''){
        alert("你还没有输入用户名哦");
        return false;
    }
    if(ps == null || ps == ''){
        alert("你还没有输入密码哦");
        return false;
    }
    return true;
}