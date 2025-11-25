// Dados dos produtos - Vestidos
const products = [
    {
        id: 1,
        title: "Cadeira de Descanso e Balanço Funtime 18kgs Coruja Maxi Baby",
        price: 189.98,
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_897453-MLA96112590357_102025-F.webp",
        shipping: "Frete grátis",
        freeShipping: true,
        link: "https://mercadolivre.com/sec/28h2Azr" // Adicione seu link aqui
    },
    {
        id: 2,
        title: "Kit 15 Peças Roupas Bebê Body Calça Touca Enxoval Completo",
        price: 68.90,
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_660568-MLB88359216828_072025-F-kit-15-pecas-roupas-beb-body-calca-touca-enxoval-completo.webp",
        shipping: "Frete grátis",
        freeShipping: true,
        link: "https://mercadolivre.com/sec/1TxPnsK" // Adicione seu link aqui
    },
    {
        id: 3,
        title: "Kit 5 Macacão De Bebê Vira Pé Estampado - Menino E Menina",
        price: 67.19,
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_758566-MLB97108805764_112025-F-kit-5-macaco-de-beb-vira-pe-estampado-menino-e-menina.webp",
        shipping: "Frete grátis",
        freeShipping: true,
        link: "https://mercadolivre.com/sec/1B6HZEm" // Adicione seu link aqui
    },
    {
        id: 4,
        title: "Kit Bolsa Mala Bebe Saída De Maternidade Mega Promoção",
        price: 139.99,
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_730605-MLB95926174392_102025-F-kit-bolsa-mala-bebe-saida-de-maternidade-mega-promoco.webp",
        shipping: "Frete grátis",
        freeShipping: true,
        link: "https://mercadolivre.com/sec/14v4kiF" // Adicione seu link aqui
    },
    {
        id: 5,
        title: "Kit De Cuidados E Higiene Do Bebê Recém Nascido 13 Peças Rosa",
        price: 55.09,
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_883106-MLB89560860671_082025-F.webp",
        shipping: "Frete grátis",
        freeShipping: true,
        link: "https://mercadolivre.com/sec/2X71phw" // Adicione seu link aqui
    },
    {
        id: 6,
        title: "Berço Bebê Moises Ajustável Mosqueteiro Portátil Infantil Rosa-claro",
        price: 692.92,
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_617396-MLB97309932192_112025-F.webp",
        shipping: "Frete grátis",
        freeShipping: true,
        link: "https://mercadolivre.com/sec/2waig2G" // Adicione seu link aqui
    },
    {
        id: 7,
        title: "Carrinho De Passeio Para Bebê Spot até 15kg Voyage IMP01766",
        price: 399.36,
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_778167-MLA96099109647_102025-F.webp",
        shipping: "Frete grátis",
        freeShipping: true,
        link: "https://mercadolivre.com/sec/2e85YdZ" // Adicione seu link aqui
    },
    {
        id: 8,
        title: "Kit De Cuidados De Saúde De Beleza Do Bebê Com Termômetro Cor Azul",
        price: 33.34,
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_698803-MLU70921776831_082023-F.webp",
        shipping: "Frete grátis",
        freeShipping: true,
        link: "https://mercadolivre.com/sec/2tJTRae" // Adicione seu link aqui
    },
    {
        id: 9,
        title: "Tapete Infantil Dobrável Impermeável Antiderrapante Conforto",
        price: 99.99,
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_620077-MLB98006234767_112025-F-tapete-infantil-dobravel-impermeavel-antiderrapante-conforto.webp",
        shipping: "Frete grátis",
        freeShipping: true,
        link: "https://mercadolivre.com/sec/2ovBod7" // Adicione seu link aqui
    },
    {
        id: 10,
        title: "Tapete Ginásio De Atividades C/ Piano Musical Castela Brasil",
        price: 63.17,
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_716032-MLB98739662747_112025-F-tapete-ginasio-de-atividades-c-piano-musical-castela-brasil.webp",
        shipping: "Frete grátis",
        freeShipping: true,
        link: "https://mercadolivre.com/sec/1YzJSDt" // Adicione seu link aqui
    },
    {
        id: 11,
        title: "Pato Dançante Brinquedo Musical Luz Som Infantil Mexe",
        price: 39.87,
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_782243-MLB89492028654_082025-F-pato-dancante-brinquedo-musical-luz-som-infantil-mexe.webp",
        shipping: "Frete grátis",
        freeShipping: true,
        link: "https://mercadolivre.com/sec/2bYX2rf" // Adicione seu link aqui
    },
    {
        id: 12,
        title: "Volante Interativo Infantil Musical Luz Simulador Unissex",
        price: 72.70,
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_849920-MLB82944288262_032025-F-volante-interativo-infantil-musical-luz-simulador-unissex.webp",
        shipping: "Frete grátis",
        freeShipping: true,
        link: "https://mercadolivre.com/sec/345z3P4" // Adicione seu link aqui
    },
    {
        id: 13,
        title: "Bebê Conforto Cosco Kids, Wizz, 0 a 13kg, Preto",
        price: 249.21,
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_894900-MLA96110883689_102025-F.webp",
        shipping: "Frete grátis",
        freeShipping: true,
        link: "https://mercadolivre.com/sec/2Pt7uAf" // Adicione seu link aqui
    },
    {
        id: 14,
        title: "Bebê Conforto Cosco Kids, Wizz, 0 a 13kg, Rosa",
        price: 251.89,
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_913179-MLA96100710497_102025-F.webp",
        shipping: "Frete grátis",
        freeShipping: true,
        link: "https://mercadolivre.com/sec/1nYbFGN" // Adicione seu link aqui
    },
    {
        id: 15,
        title: "Carrinho de bebê 3 rodas Voyage Delta Cor Rosa/Preto",
        price: 477.01,
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_998855-MLA95690878894_102025-F.webp",
        shipping: "Frete grátis",
        freeShipping: true,
        link: "https://mercadolivre.com/sec/2mY9A4E" // Adicione seu link aqui
    },
    {
        id: 16,
        title: "Kit Enxoval 30 Peças Roupinha De Bebê Body Calça Algodão",
        price: 121.61,
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_975077-MLB89117992564_082025-F-kit-enxoval-30-pecas-roupinha-de-beb-body-calca-algodo.webp",
        shipping: "Frete grátis",
        freeShipping: true,
        link: "https://mercadolivre.com/sec/2ZQxdCL" // Adicione seu link aqui
    },
    {
        id: 17,
        title: "Kit Roupa De Bebe 9 Peças Body E Calça Algodão De Menino",
        price: 107.91,
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_676107-MLB87203033291_072025-F-kit-roupa-de-bebe-9-pecas-body-e-calca-algodo-de-menino.webp",
        shipping: "Frete grátis",
        freeShipping: true,
        link: "https://mercadolivre.com/sec/1ZQ1C1i" // Adicione seu link aqui
    },
    {
        id: 18,
        title: "Kit 9 Peças Roupa De Bebe Menina Body E Calça Mijão Algodão",
        price: 107.91,
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_605623-MLB79318695068_092024-F-kit-9-pecas-roupa-de-bebe-menina-body-e-calca-mijo-algodo.webp",
        shipping: "Frete grátis",
        freeShipping: true,
        link: "https://mercadolivre.com/sec/1tNDhdV" // Adicione seu link aqui
    },
    {
        id: 19,
        title: "Kit 21 Pçs Maternidade Roupa De Bebê Frete Gratis",
        price: 72.12,
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_855386-MLB85296983284_062025-F-kit-21-pcs-maternidade-roupa-de-beb-frete-gratis.webp",
        shipping: "Frete grátis",
        freeShipping: true,
        link: "https://mercadolivre.com/sec/2MijFwX" // Adicione seu link aqui
    },
    {
        id: 20,
        title: "A Roupas De Natal Para Bebês Com Mangas, Saias De Malha",
        price: 208.62,
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_736395-MLB98733620024_112025-F-a-roupas-de-natal-para-bebs-com-mangas-saias-de-malha.webp",
        shipping: "Frete grátis",
        freeShipping: true,
        link: "https://mercadolivre.com/sec/2SnzcQr" // Adicione seu link aqui
    },
    {
        id: 21,
        title: "02 Pacotes Fraldas Turma Da Mônica + 280 Toalhas Umedecidas",
        price: 95.90,
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_814088-MLB93993094835_102025-F-02-pacotes-fraldas-turma-da-mnica-280-toalhas-umedecidas.webp",
        shipping: "Frete grátis",
        freeShipping: true,
        link: "https://mercadolivre.com/sec/16rWgnN" // Adicione seu link aqui
    },
    {
        id: 22,
        title: "Fralda-calca Mamypoko Cuidado Real Tamanho Rn c/ 36 Unidades",
        price: 44.66,
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_873741-MLA96138870965_102025-F.webp",
        shipping: "Frete grátis",
        freeShipping: true,
        link: "https://mercadolivre.com/sec/1BbbiQR" // Adicione seu link aqui
    },
    {
        id: 23,
        title: "Berço C/colchão Ditália Multifuncional 3x1 Bbi-51 Br Cozy",
        price: 459.90,
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_984230-MLB89123516637_082025-F-berco-ccolcho-ditalia-multifuncional-3x1-bbi-51-br-cozy.webp",
        shipping: "Frete grátis",
        freeShipping: true,
        link: "https://mercadolivre.com/sec/2j5d5Dk" // Adicione seu link aqui
    },
    {
        id: 24,
        title: "Berço Bebê Trocador Desmontável Mobile Baby Style Rosa Joly Cor Cinza/rosa",
        price: 458.05,
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_744077-MLA95834960359_102025-F.webp",
        shipping: "Frete grátis",
        freeShipping: true,
        link: "https://mercadolivre.com/sec/1wXFZx9" // Adicione seu link aqui
    },
    {
        id: 25,
        title: "Jogo De Quarto Infantil Com Colchão Trevalla Móveis Pom Pom Cor Branco",
        price: 800.10,
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_842776-MLA95393812050_102025-F.webp",
        shipping: "Frete grátis",
        freeShipping: true,
        link: "https://mercadolivre.com/sec/1MVqntv" // Adicione seu link aqui
    },
    {
        id: 26,
        title: "Quarto De Bebê Completo Berço Americano Marquesa Cômoda Uli",
        price: 888.90,
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_775584-MLB98060413692_112025-F-quarto-de-beb-completo-berco-americano-marquesa-cmoda-uli.webp",
        shipping: "Frete grátis",
        freeShipping: true,
        link: "https://mercadolivre.com/sec/1giRRBt" // Adicione seu link aqui
    },
    {
        id: 27,
        title: "Inalador Nebulizador Compressor Infantil Adulto Bivolt Leve Branco",
        price: 130.50,
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_704323-MLB92647884907_092025-F.webp",
        shipping: "Frete grátis",
        freeShipping: true,
        link: "https://mercadolivre.com/sec/1yRN3Mb" // Adicione seu link aqui
    },
    {
        id: 28,
        title: "Umidificador Ultrassonico Allergy Free Dual Bivolt G-tech",
        price: 139.90,
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_835583-MLU75771913004_042024-F.webp",
        shipping: "Frete grátis",
        freeShipping: true,
        link: "https://mercadolivre.com/sec/1j3Fd2i" // Adicione seu link aqui
    },
    {
        id: 29,
        title: "Mosquiteiro Berço Tela Mosquiteira Cortinado Rede Véu Bebê Cor Branco",
        price: 39.92,
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_826363-MLA95657508710_102025-F.webp",
        shipping: "Frete grátis",
        freeShipping: true,
        link: "https://mercadolivre.com/sec/2WrxRsV" // Adicione seu link aqui
    },
    {
        id: 30,
        title: "Sugador Aspirador Nasal Bebê Usb Limpeza Nariz Ouvido Azul",
        price: 43.64,
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_807509-MLB93635758549_092025-F.webp",
        shipping: "Frete grátis",
        freeShipping: true,
        link: "https://mercadolivre.com/sec/1NS4zW8" // Adicione seu link aqui
    },
    {
        id: 31,
        title: "Garrafa térmica Termolar Lúmina Bomba de Pressão 1L",
        price: 73.89,
        image: "https://http2.mlstatic.com/D_NQ_NP_2X_867151-MLA95634202854_102025-F.webp",
        shipping: "Frete grátis",
        freeShipping: true,
        link: "https://mercadolivre.com/sec/1LCvJf9" // Adicione seu link aqui
    }
];

