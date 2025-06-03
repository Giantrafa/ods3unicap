document.getElementById('whatsapp-form').addEventListener('submit', function() {
    
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
    
    
    if (!name || !phone || !message) {
        alert("Por favor, preencha todos os campos!");
        return;
    }
    
    
    const formattedPhone = phone.replace(/\D/g, '');
    
    
    if (formattedPhone.length < 11) {
        alert('Por favor, insira um número de telefone válido com DDD.');
        return;
    }
    
    
    const whatsappMessage = `Olá, aqui é ${name} do telefone ${phone}, ${message}`;
    
    const whatsappUrl = `https://wa.me/5581999082930?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl);
    this.reset();
});