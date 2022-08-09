const greetingMessage = () => {
    //let h = new Date().toLocaleTimeString('pt-BR', { hour: 'numeric', hour12: false }); 
    let h = new Date().getHours();
    switch (true) {
      case h <= 5: return '&#xf123 Boa madrugada';
      case h < 12: return '&&#xf118 Bom dia';
      case h < 18: return '&#xf185 Boa tarde';
      default: return '&#xf186 Boa noite';
    }      
  }
  
  //console.log(greetingMessage());
  document.write(greetingMessage());
  