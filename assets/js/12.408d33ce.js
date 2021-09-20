(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{393:function(e,a,s){"use strict";s.r(a);var o=s(29),r=Object(o.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"cpus"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cpus"}},[e._v("#")]),e._v(" CPUs")]),e._v(" "),s("p",[e._v("Eis uma breve lista de CPUs a se evitar.")]),e._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#cpus-amd"}},[e._v("CPUs AMD")])]),s("li",[s("a",{attrs:{href:"#cpus-intel"}},[e._v("CPUs Intel")])]),s("li",[s("a",{attrs:{href:"#cpus-nao-suportadas"}},[e._v("CPUs Não Suportadas")])])])]),s("p"),e._v(" "),s("h2",{attrs:{id:"cpus-amd"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cpus-amd"}},[e._v("#")]),e._v(" CPUs AMD")]),e._v(" "),s("p",[e._v("Embora CPUs AMD possam funcionar, recomenda-se evitá-las devido aos inúmeros problemas que ainda as atormentam por não serem suportadas nativamente. Elas exigem um pouco mais de esforço para configurar, mas para aqueles que insistem, existe o guia "),s("a",{attrs:{href:"https://vanilla.amd-osx.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("AMD Vanilla"),s("OutboundLink")],1),e._v(" (em inglês).")]),e._v(" "),s("p",[e._v("Problemas comuns com AMD:")]),e._v(" "),s("ul",[s("li",[e._v("Produtos da Adobe nem sempre funcionam e não há correções para o  Lightroom no momento.\n"),s("ul",[s("li",[e._v("Algumas correções podem ser encontradas aqui: "),s("a",{attrs:{href:"https://adobe.amd-osx.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Correções para Adobe"),s("OutboundLink")],1),e._v(" (em inglês).")]),e._v(" "),s("li",[e._v("Observe que essas correções apenas desativam recursos, mas não corrigem os problemas de verdade.")])])]),e._v(" "),s("li",[e._v("Cubase, REAPER e outros softwares de áudio travam na inicialização.\n"),s("ul",[s("li",[e._v("O REAPER funciona "),s("strong",[e._v("se")]),e._v(" usar a "),s("em",[e._v("build")]),e._v(" Clang.")]),e._v(" "),s("li",[e._v("Não há correções para o Cubase no momento.")]),e._v(" "),s("li",[e._v("Plugins Waves também causam travamentos.")])])]),e._v(" "),s("li",[e._v("Máquinas virtuais que usem o "),s("em",[e._v("framework")]),e._v(" AppleHV não funcionam (ex.: Parallels 15).\n"),s("ul",[s("li",[e._v("O VirtualBox funciona bem, já que não usa o AppleHV.")])])]),e._v(" "),s("li",[e._v("O Docker não funciona.\n"),s("ul",[s("li",[e._v("O Docker Toolbox é baseado no VirtualBox, mas muitos recursos não estão disponíveis nele.")])])]),e._v(" "),s("li",[e._v("O simulador de Apple Watch do Xcode não funciona no macOS 10.15 Catalina.\n"),s("ul",[s("li",[e._v("Funciona bem no macOS 10.14 Mojave.")])])]),e._v(" "),s("li",[e._v("Entrada de microfone não disponível com a AppleALC, exigindo o uso da VoodooHDA (qualidade de som pior e geralmente mais instável).")]),e._v(" "),s("li",[e._v("Problemas de atraso de áudio em APUs Ryzen (chips série G).\n"),s("ul",[s("li",[e._v("Um DAC USB é a única solução além da troca de CPU.")])])]),e._v(" "),s("li",[e._v("Dificuldade de configurar a suspensão (impossível em alguns computadores).")]),e._v(" "),s("li",[e._v("Sem gerenciamento de energia da CPU.")]),e._v(" "),s("li",[e._v("Nem todas as portas USB funcionam em algumas placas.\n"),s("ul",[s("li",[e._v("Isso deve-se ao fato de não estarem indicadas na ACPI. Será necessário adicioná-las manualmente à DSDT.")])])]),e._v(" "),s("li",[e._v("Atualizações atrasadas.")]),e._v(" "),s("li",[s("s",[e._v("Threadripper de 3ª Geração não é suportada")]),e._v(" "),s("ul",[s("li",[e._v("Atualizações mais recentes de BIOS e do OpenCore agora são capazes de iniciar CPUs TRx40.")])])])]),e._v(" "),s("p",[e._v("CPUs AMD a se evitar:")]),e._v(" "),s("ul",[s("li",[e._v("AMD Ryzen 1000 Series")]),e._v(" "),s("li",[e._v("AMD Ryzen 2000 Series")]),e._v(" "),s("li",[e._v("AMD Ryzen 3000 Series")]),e._v(" "),s("li",[e._v("AMD Athlon")]),e._v(" "),s("li",[e._v("AMD ThreadRipper")]),e._v(" "),s("li",[e._v("AMD FX Series")])]),e._v(" "),s("h2",{attrs:{id:"cpus-intel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cpus-intel"}},[e._v("#")]),e._v(" CPUs Intel")]),e._v(" "),s("p",[e._v("Graças ao fato da maioria das CPUs Intel serem bastante similares umas as outras, é possível conseguir suporte ao falsificar o ID para o de uma CPU suportada. O único problema é que a GPU integrada raramente funciona em Atom/Pentium/Celeron, o que significa que um "),s("em",[e._v("hackintosh")]),e._v(" barato com GPU integrada é impossível de fazer com essas CPUs. Em relação à CPUs X99/LGA 2011-V3, há o problema em que elas nunca foram vendidas num Mac de verdade, o que traz vários problemas ao executar o macOS nesses computadores. Evite se possível.")]),e._v(" "),s("p",[s("strong",[e._v("Observação aos Usuários de Dual Socket")]),e._v(": observe que o kernel do macOS suporta somente um máximo de 64 "),s("em",[e._v("threads")]),e._v(". Então, em configurações de alto desempenho, tome cuidado. E para usuários de dual socket, será preciso instalar o "),s("a",{attrs:{href:"https://github.com/acidanthera/bugtracker/files/3703498/AppleMCEReporterDisabler.kext.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("AppleMCEReporterDisabler"),s("OutboundLink")],1),e._v(" no macOS 10.15 Catalina.")]),e._v(" "),s("p",[e._v("CPUs Intel a se evitar:")]),e._v(" "),s("ul",[s("li",[e._v("Intel Atoms")]),e._v(" "),s("li",[e._v("Intel Celerons")]),e._v(" "),s("li",[e._v("Intel Pentiums")]),e._v(" "),s("li",[e._v("Intel X79/LGA 2011")]),e._v(" "),s("li",[e._v("Intel X99/LGA 2011-V3")]),e._v(" "),s("li",[e._v("Intel X299/LGA-2066")])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("Recomendações")]),e._v(" "),s("p",[e._v("Então, a recomendação geral para CPUs é:")]),e._v(" "),s("ul",[s("li",[e._v("CPUs Intel semi-modernas para consumidores.\n"),s("ul",[s("li",[e._v("CPUs Ivy Bridge até Comet Lake possuem suporte apropriado no macOS.")])])])])]),e._v(" "),s("h2",{attrs:{id:"cpus-nao-suportadas"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cpus-nao-suportadas"}},[e._v("#")]),e._v(" CPUs Não Suportadas")]),e._v(" "),s("p",[e._v("Quando o assunto são CPUs não suportadas, a discussão divide-se em duas áreas: ou são muito velhas para funcionar ou são muito novas e não suportam os patches existentes.")]),e._v(" "),s("p",[s("strong",[e._v("Velhas Demais para Funcionar")]),e._v(":")]),e._v(" "),s("p",[e._v("Consiste principalmente de CPUs que não possuem o conjunto de instruções SSE4.2 exigido pelo macOS 10.14 Mojave e mais novos. É possível contornar isso substituindo o plugin de telemetria, mas não é o ideal. Veja o repositório do "),s("a",{attrs:{href:"https://github.com/khronokernel/trashOS",target:"_blank",rel:"noopener noreferrer"}},[e._v("trashOS"),s("OutboundLink")],1),e._v(" (em inglês) para obter mais informações.")]),e._v(" "),s("ul",[s("li",[e._v("Wolfdale (série Intel Core 2 Duo)\n"),s("ul",[s("li",[e._v("E7xxx")]),e._v(" "),s("li",[e._v("E8xxx")])])]),e._v(" "),s("li",[e._v("Yorkfield (série Intel Core 2 Quad)\n"),s("ul",[s("li",[e._v("E8xxx")]),e._v(" "),s("li",[e._v("E9xxx")])])])]),e._v(" "),s("p",[e._v("Então existem as CPUs que não possuem suporte aos conjuntos de instruções SSE4.1 e mais antigos. Nesses casos, o suporte acaba no OS X 10.11 El Capitan.")])])}),[],!1,null,null,null);a.default=r.exports}}]);