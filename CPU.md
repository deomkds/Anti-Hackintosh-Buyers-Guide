# CPUs

Eis uma breve lista de CPUs a se evitar.

[[toc]]

## CPUs AMD

Embora CPUs AMD possam funcionar, recomenda-se evitá-las devido aos inúmeros problemas que ainda as atormentam por não serem suportadas nativamente. Elas exigem um pouco mais de esforço para configurar, mas para aqueles que insistem, existe o guia [AMD Vanilla](https://vanilla.amd-osx.com) (em inglês).

Problemas comuns com AMD:

* Produtos da Adobe nem sempre funcionam e não há correções para o  Lightroom no momento.
  * Algumas correções podem ser encontradas aqui: [Correções para Adobe](https://adobe.amd-osx.com/) (em inglês).
  * Observe que essas correções apenas desativam recursos, mas não corrigem os problemas de verdade.
* Cubase, REAPER e outros softwares de áudio travam na inicialização.
  * O REAPER funciona **se** usar a *build* Clang.
  * Não há correções para o Cubase no momento.
  * Plugins Waves também causam travamentos.
* Máquinas virtuais que usem o *framework* AppleHV não funcionam (ex.: Parallels 15).
  * O VirtualBox funciona bem, já que não usa o AppleHV.
* O Docker não funciona.
  * O Docker Toolbox é baseado no VirtualBox, mas muitos recursos não estão disponíveis nele.
* O simulador de Apple Watch do Xcode não funciona no macOS 10.15 Catalina.
  * Funciona bem no macOS 10.14 Mojave.
* Entrada de microfone não disponível com a AppleALC, exigindo o uso da VoodooHDA (qualidade de som pior e geralmente mais instável).
* Problemas de atraso de áudio em APUs Ryzen (chips série G).
  * Um DAC USB é a única solução além da troca de CPU.
* Dificuldade de configurar a suspensão (impossível em alguns computadores).
* Sem gerenciamento de energia da CPU.
* Nem todas as portas USB funcionam em algumas placas.
  * Isso deve-se ao fato de não estarem indicadas na ACPI. Será necessário adicioná-las manualmente à DSDT.
* Atualizações atrasadas.
* ~~Threadripper de 3ª Geração não é suportada~~
  * Atualizações mais recentes de BIOS e do OpenCore agora são capazes de iniciar CPUs TRx40.

CPUs AMD a se evitar:

* AMD Ryzen 1000 Series
* AMD Ryzen 2000 Series
* AMD Ryzen 3000 Series
* AMD Athlon
* AMD ThreadRipper
* AMD FX Series

## CPUs Intel

Graças ao fato da maioria das CPUs Intel serem bastante similares umas as outras, é possível conseguir suporte ao falsificar o ID para o de uma CPU suportada. O único problema é que a GPU integrada raramente funciona em Atom/Pentium/Celeron, o que significa que um *hackintosh* barato com GPU integrada é impossível de fazer com essas CPUs. Em relação à CPUs X99/LGA 2011-V3, há o problema em que elas nunca foram vendidas num Mac de verdade, o que traz vários problemas ao executar o macOS nesses computadores. Evite se possível.

**Observação aos Usuários de Dual Socket**: observe que o kernel do macOS suporta somente um máximo de 64 *threads*. Então, em configurações de alto desempenho, tome cuidado. E para usuários de dual socket, será preciso instalar o [AppleMCEReporterDisabler](https://github.com/acidanthera/bugtracker/files/3703498/AppleMCEReporterDisabler.kext.zip) no macOS 10.15 Catalina.

CPUs Intel a se evitar:

* Intel Atoms
* Intel Celerons
* Intel Pentiums
* Intel X79/LGA 2011
* Intel X99/LGA 2011-V3
* Intel X299/LGA-2066

::: tip Recomendações

Então, a recomendação geral para CPUs é:

* CPUs Intel semi-modernas para consumidores.
  * CPUs Ivy Bridge até Comet Lake possuem suporte apropriado no macOS.
:::

## CPUs Não Suportadas

Quando o assunto são CPUs não suportadas, a discussão divide-se em duas áreas: ou são muito velhas para funcionar ou são muito novas e não suportam os patches existentes.

**Velhas Demais para Funcionar**:

Consiste principalmente de CPUs que não possuem o conjunto de instruções SSE4.2 exigido pelo macOS 10.14 Mojave e mais novos. É possível contornar isso substituindo o plugin de telemetria, mas não é o ideal. Veja o repositório do [trashOS](https://github.com/khronokernel/trashOS) (em inglês) para obter mais informações.

* Wolfdale (série Intel Core 2 Duo)
  * E7xxx
  * E8xxx
* Yorkfield (série Intel Core 2 Quad)
  * E8xxx
  * E9xxx

Então existem as CPUs que não possuem suporte aos conjuntos de instruções SSE4.1 e mais antigos. Nesses casos, o suporte acaba no OS X 10.11 El Capitan.
