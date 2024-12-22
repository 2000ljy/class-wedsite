// 管理员登录处理
ocument.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('adminLoginForm');
    if(loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
 );
 // 处理登录
 unction handleLogin(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if(username === 'admin' && password === 'admin123') {
        localStorage.setItem('adminLoggedIn', 'true');
        window.location.href = 'dashboard.html';
    } else {
        alert('用户名或密码错误！');
    }
 
 // 检查登录状态
 unction checkAdminAuth() {
    if(!localStorage.getItem('adminLoggedIn')) {
        window.location.href = 'login.html';
    }
 
 // 退出登录
 unction logout() {
    localStorage.removeItem('adminLoggedIn');
    window.location.href = 'login.html';
 