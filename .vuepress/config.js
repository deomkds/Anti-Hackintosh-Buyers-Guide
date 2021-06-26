const {
    description
} = require('../package')

module.exports = {
    title: 'Anti-Hackintosh Buyers Guide',
    description: description,
    head: [
        ['meta', {
            name: 'theme-color',
            content: '#3eaf7c'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-capable',
            content: 'yes'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
        }],
        ["link", {
            rel: "'stylesheet",
            href: "/styles/website.css"
        },]
    ],
    base: '/Anti-Hackintosh-Buyers-Guide/',
    theme: 'vuepress-theme-succinct',
    globalUIComponents: [
        'ThemeManager'
    ],

    themeConfig: {
        lastUpdated: true,
        repo: 'https://github.com/deomkds/Anti-Hackintosh-Buyers-Guide',
        editLinks: false,
        docsDir: '',
        editLinkText: '',
        logo: '/homepage.png',
        nav: [{
            text: 'Outros Guias',
            ariaLabel: 'Language Menu',
            items: [{
                text: 'Site Original (em inglês)',
                link: 'https://dortania.github.io/'
            },
            {
                text: 'Primeiros Passos com a ACPI',
                link: 'https://deomkds.github.io/Getting-Started-With-ACPI/'
            },
            {
                text: 'Guia de Instalação do OpenCore',
                link: 'https://deomkds.github.io/OpenCore-Install-Guide/'
            },
            {
                text: 'Pós-instalação do OpenCore',
                link: 'https://deomkds.github.io/OpenCore-Post-Install/'
            },
            {
                text: 'Multiboot com o OpenCore',
                link: 'https://deomkds.github.io/OpenCore-Multiboot/'
            },            
            {
                text: 'Guia de Compra de GPUs',
                link: 'https://deomkds.github.io/GPU-Buyers-Guide/'
            },
            {
                text: 'Guia de Compra de Wi-Fi',
                link: 'https://deomkds.github.io/Wireless-Buyers-Guide/'
            },
            ]
        },
        ],
        sidebar: [{
            title: 'Introdução',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                '',
            ]

        },
        {
            title: 'O Que Evitar',
            collapsable: false,
            sidebarDepth: 2,
            children: [
                ['CPU', 'CPU'],
                ['GPU', 'GPU'],
				        ['Motherboard', 'Placa-Mãe'],
				        ['Storage', 'Armazenamento'],
				        ['RAM', 'Memória RAM'],
				        ['Cooler', 'Cooler'],
				        ['Networking', 'Rede Cabeada'],
				        ['Wireless', 'Rede Sem Fio'],
				        ['PSU', 'Fonte de Alimentação'],
				        ['Case', 'Gabinete'],
				        ['ThermalPaste', 'Pasta Térmica'],
            ]
        },
    ],
},
    plugins: [
        '@vuepress/plugin-back-to-top',
        'vuepress-plugin-smooth-scroll',
        ['vuepress-plugin-medium-zoom',
            {
                selector: "img",
                options: {
                    background: 'var(--bodyBgColor)'
                }
            }],
    ]
}
