var Config = {
    type: Phaser.AUTO, // Escolhe automaticamente entre renderização WebGL ou Canvas
    width: window.innerWidth, // Largura do jogo definida dinamicamente para o tamanho da janela
    height: window.innerHeight, // Altura do jogo definida dinamicamente para o tamanho da janela

    scene: {
        preload: preload, // Carrega os recursos do jogo
        create: create, // Inicializa e cria os elementos do jogo
        update: update // Atualiza a lógica do jogo a cada quadro
    },
    scale: {
        mode: Phaser.Scale.RESIZE, // Redimensiona automaticamente o canvas do jogo ao alterar o tamanho da janela
        autoCenter: Phaser.Scale.CENTER_BOTH // Centraliza o canvas do jogo horizontal e verticalmente
    }
};

var game = new Phaser.Game(Config); // Cria uma nova instância do jogo Phaser
var peixinho; // Variável para o sprite do peixe amarelo
var peixe; // Variável para o sprite do peixe verde
var flutuacaoOffset = 0; // Controla a animação de flutuação do peixe amarelo
var peixeSpeed = 2; // Velocidade horizontal do peixe verde

function preload() {
    // Carrega os recursos do jogo
    this.load.image('bnr', 'assets/banernovo.webp');
    this.load.image('logo', 'assets/logo-inteli_azul.png');
    this.load.image('px', 'assets/peixes/peixe_amarelo.png');
    this.load.image('fish', 'assets/peixenv.png');
}

function create() {
    // Cria e exibe a imagem de fundo, ajustando-a ao tamanho do canvas
    this.bg = this.add.image(0, 0, 'bnr').setOrigin(0);
    this.bg.displayWidth = this.sys.canvas.width;
    this.bg.displayHeight = this.sys.canvas.height;

    // Cria e posiciona o logo na parte inferior central da tela
    this.logo = this.add.image(this.sys.canvas.width / 2, this.sys.canvas.height * 0.9, 'logo').setScale(0.6);

    // Cria o sprite do peixe amarelo no centro     da tela
    peixinho = this.add.image(this.sys.canvas.width / 2, this.sys.canvas.height / 2, 'px').setOrigin(0.5, 0.5);

    // Cria o sprite do peixe verde próximo ao lado esquerdo da tela
    peixe = this.add.image(0, this.sys.canvas.height * 0.3, 'fish').setScale(0.6).setOrigin(0.5, 0.5);

    resizeElements(this); // Redimensiona e reposiciona elementos com base no tamanho das telas/canvas
}

function update() {
    // Obtém a posição do mouse ou mantém a posição atual do peixe, se não disponível
    const targetX = this.input.x || peixinho.x;
    const targetY = this.input.y || peixinho.y;

    // Inverte a a posicao do peixe amarelo com base no seu movimento do mouse 
    if (targetX < peixinho.x && !peixinho.flipX) {
        peixinho.flipX = true;
    } else if (targetX > peixinho.x && peixinho.flipX) {
        peixinho.flipX = false;
    }

    // Move suavemente o peixe amarelo em direção à posição do mouse
    peixinho.x += (targetX - peixinho.x) * 0.05;
    peixinho.y += (targetY - peixinho.y) * 0.05;

    // efeito de flutuacao ao peixe amarelo que segue o mouse 
    flutuacaoOffset += 0.05;
    peixinho.y += Math.sin(flutuacaoOffset) * 2;

    // Move o peixe verde horizontalmente
    peixe.x += peixeSpeed;

    // Inverte a direção do peixe verde assim fazendo com que ele de um flip de 180 ao atingir a borda da tela
    if (peixe.x > this.sys.canvas.width || peixe.x < 0) {
        peixeSpeed *= -1;
        peixe.flipX = !peixe.flipX;
    }
}

function resizeElements(scene) {
    // Redimensiona o background para ajustar às novas dimensões do canvas
    scene.bg.displayWidth = scene.sys.canvas.width;
    scene.bg.displayHeight = scene.sys.canvas.height;

    // Reposiciona o logo e o peixe amarelo com base na tela 
    scene.logo.setPosition(scene.sys.canvas.width / 2, scene.sys.canvas.height * 0.9);
    peixinho.setPosition(scene.sys.canvas.width / 2, scene.sys.canvas.height / 2);
    peixe.setPosition(peixe.x, peixe.y); // Mantém a posição do peixe verde
}

// Redimensiona As telas do jogo de acordo com a tela do usuario assim ficando resposivo
window.addEventListener('resize', () => {
    game.scale.resize(window.innerWidth, window.innerHeight);
});