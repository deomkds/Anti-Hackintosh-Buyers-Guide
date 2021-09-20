# Placas-mãe

::: warning

~~Atualmente, a única placa-mãe que não possui **nenhum** suporte são as B550 da AMD, que exigem um KVM para serem operadas.~~

Desenvolvimentos recentes resolveram esse problema por meio da SSDT-CPUR. Veja o [Guia de Instalação do OpenCore](https://deomkds.github.io/OpenCore-Install-Guide/) para obter mais informações.

:::

Quando o assunto são placas-mãe, o principal ponto a se observar são os controladores que o computador utiliza, especificamente:

* Controlador da Interface de Áudio
* Controlador da Interface de Rede (Ethernet)
* Controladores USB
* NVRAM
* GPU Integrada
* RTC vs AWAC
* Mapas de Memória e Proteções

E em relação a placas-mãe AMD e Intel:

* **Intel**:
  * Marcas diferentes possuem níveis diferentes de suporte, no entanto, de maneira geral, todas as marcas são iniciáveis, presumindo que o usuário não se importe de fuçar (mencionado abaixo).
* **AMD**:
  * Praticamente todas as placas-mãe AMD não são favoráveis devido aos [inúmeros hacks necessários para iniciar](https://github.com/AMD-OSX/AMD_Vanilla) (em inglês), no entanto, a marca em si não afeta muito o suporte no macOS.
  * Suporte a hardwares variados, como áudio e Ethernet, ainda são coisas para ficar de olho.

As principais placas **Intel** a se evitar são:

* MSI
  * Leiaute de memória estranho que requer correções de KASLR e péssima programação de ACPI. Muitos computadores Z390 não iniciam com o Clover.
  * O OpenCore consegue iniciar nesses computadores de maneira relativamente fácil.
* AsRock
  * Controlador USB não nativo e leiaute de memória estranho.
  * Problemas de USB principalmente em Z390 e mais antigos. Z490 está de boa.
* Gigabyte
  * Leiaute de memória estranho que requer correções de KASLR.
  * Principalmente Z390, Z370 e Z490 são conhecidas por serem boas.
* Asus
  * Problemas de USB em B460, H470 e Z490.
  * Z390 e mais antigas estão de boa.

::: tip Recomendações

A recomendação geral de marcas Intel é:

* Z370 e mais antigas:
  * Gigabyte
  * Asus
  * MSI
* Z390:
  * Asus
  * Gigabyte
* Z490:
  * Asus
  * Gigabyte
  * AsRock

:::

As principais plataformas a se evitar são:

* X79
* X99
* X299
* C612
* C621
* C422
* B360 *
* B365 *
* H310 *
* H370 *
* Z390 *
* B460
* H470
* Z490

Observação (*): somente compre essas caso precise de recursos que não são encontrados na Z370 ou queira fazer _overclock_ em uma CPU Intel de 9ª geração. A maioria dos problemas com essas placas já foi corrigido, mas elas ainda são uma grande bagunça. Mais detalhes abaixo.

---

## Áudio

O áudio da maioria das placas é suportado. É possível encontrar uma lista mais extensa na página da [AppleALC](https://github.com/acidanthera/AppleALC/wiki/Supported-codecs) (em inglês). A VoodooHDA é também uma opção para usuários de placas antigas.

**Observação**: usuários de placas-mãe AMD precisarão usar a VoodooHDA caso desejem utilizar o conector de microfone integrado. No entanto, a saída de áudio normal funciona com a AppleALC.

---

## Ethernet

Quanto a Ethernet, basicamente todos os NICs gigabit são suportados. Veja mais informações a seguir.

* [IntelMausiEthernet.kext](https://github.com/Mieze/IntelMausiEthernet)
  * Para a maioria dos controladores Intel.
* [SmallTree-I211-AT-patch](https://github.com/khronokernel/SmallTree-I211-AT-patch/releases)
  * Para a I211-AT, que é comumente encontrada em placas AMD.
* [AtherosE2200Ethernet.kext](https://github.com/Mieze/AtherosE2200Ethernet)
  * Para a maioria dos controladores Atheros.
* [RealtekRTL8111](https://github.com/Mieze/RTL8111_driver_for_OS_X)
  * Para Realtek Gigabit Ethernet.
* [LucyRTL8125Ethernet](https://github.com/Mieze/LucyRTL8125Ethernet)
  * Para Realtek 2.5Gb Ethernet.

Para controladores de Ethernet antigos, existem algumas opções para escolher. Computadores com esses chips geralmente são de uma era anterior à série Core i de processadores.

* [AppleIntelE1000e.kext](https://github.com/chris1111/AppleIntelE1000e)
* [https://github.com/Mieze/RealtekRTL8100](https://github.com/Mieze/RealtekRTL8100)

**Observação**: A Realtek L8200A é completamente não suportada. Para obter uma lista completa, veja a seção [Rede](/Networking.md).

**Observação 2**: Aqueles que planejam comprar placas Intel Z490, perceba que o controlador i225-V não possui suporte oficial sem a falsificação de *device-id*. Um exemplo disso pode ser encontrado aqui: [Falsificação de Comet Lake i225-V](https://deomkds.github.io/OpenCore-Install-Guide/config.plist/comet-lake.html#ponto-de-partida).

---

## USB

Quanto a USB, as coisas são *razoavelmente* simples. A maioria dos controladores Ryzen/Matisse, Intel e AsMedia funcionam automaticamente sem nenhuma outra configuração além do [Mapa de USB](https://deomkds.github.io/OpenCore-Post-Install/usb/). Para usuários de AsRock com CPUs Intel, será necessário usar a `XHCI-unsupported.kext` (que pode ser encontrada dentro do projeto [USBInjectAll do RehabMan](https://github.com/RehabMan/OS-X-USB-Inject-All) (em inglês). Muitas placas H370, B360, H310 e X79/X99/X299 também se beneficiam desta *kext*.

**Observação Especial para AMD**: devido à forma como o macOS constrói USBs, elas **precisam** estar definidas em algum lugar das tabelas ACPI. Por algum motivo, muitas placas AMD simplesmente esquecem de fazer isso e os usuários acabam com muitas portas USB quebradas. Há uma correção, mas envolve a adição manual dessas portas na [DSDT ou SSDT](https://deomkds.github.io/OpenCore-Post-Install/usb/).

**Observação Especial para Asus Série 400**: graças à Asus não respeitando a especificação da ACPI, será necessário usar a [SSDT-RHUB](https://dortania.github.io/Getting-Started-With-ACPI/) para redefinir suas portas.

---

## NVRAM

Com a NVRAM, a maioria dos problemas já foi corrigido nas plataformas de consumidor graças à [SSDT-PMC](https://github.com/acidanthera/OpenCorePkg/blob/master/Docs/AcpiSamples/SSDT-PMC.dsl). Isso é relevante principalmente para as seguintes placas.

Observe que a série 400, como Z490, não estão inclusas.

* Z390
* H370
* B360
* H310

No entanto, existem algumas placas sem suporte à NVRAM, principalmente HEDT e placas de servidores:

* C612
* C621
* C422
* X79
* X99
* X299 (NVRAM funciona só na Asus).

---

## GPU Integrada

Então, uma coisa engraçada sobre CPUs Coffee Lake é que a Intel mudou muita coisa na maneira como a saída de vídeo da GPU integrada funciona. Mais especificamente, o macOS não tem ideia de como lidar com ela. Há uma correção, mas exige a [aplicação de patches manuais de BusID por meio da WhateverGreen](https://deomkds.github.io/OpenCore-Install-Guide/extras/gpu-patches.html). Principais vítimas são:

* Z490
* H470
* B460
* Z390
* H370
* B360
* H310

Observe que a Z370 não está na lista. Isso acontece porque a placa é basicamente uma Z270, então o mapa de vídeo da Apple funciona corretamente com ela.

---

## RTC vs AWAC

Quanto a RTC vs AWAC, o macOS simplesmente não inicia em computadores cujo relógio é o AWAC e a maioria das interfaces gráficas das BIOS nem mesmo exibem a opção para trocá-lo. Isso é visto principalmente em:

* Z490
* H470
* B460
* Z390
* H370
* B360
* H310
* Z370 (principalmente Gigabyte e AsRock, visto que eles portaram o relógio das versões mais novas para ela. Outras placas são de boa).
* X299 (principalmente aquelas lançadas com CPUs de 10ª geração. AsRock e Gigabyte são as duas principais infratoras).
  * A Asus tem portado o AWAC até mesmo para placas de 2017 em novas atualizações de BIOS, então fique de olho.

Então, é preciso:

* [Forçar o RTC com uma SSDT](https://github.com/acidanthera/OpenCorePkg/blob/master/Docs/AcpiSamples/SSDT-AWAC.dsl),
* [Criar um relógio falso](https://github.com/acidanthera/OpenCorePkg/blob/master/Docs/AcpiSamples/SSDT-RTC0.dsl)
* [Arrancar fora com patches](https://www.hackintosh-forum.de/forum/thread/39846-asrock-z390-taichi-ultimate/?pageNo=2) (em inglês)

Você pode encontrar mais informações sobre como consertar isso na página [Primeiros Passos com a ACPI](https://dortania.github.io/Getting-Started-With-ACPI/).

---

## Mapas de Memória e Proteções

Com isso, as principais placas afetadas são:

* C612 (visto geralmente em placas de servidor)
* C621
* C422
* X79
* X99
* X299
* B360
* B365
* H310
* H370
* Z390
* B460
* H470
* Z490

O problema que essas plataformas enfrentam é que muitas delas dependem do OsxAptioFix2Drv-free2000, que agora é considerado danoso ao computador. Isso significa que os guias de compra baseados nele são inválidos. Mais informações podem ser encontradas [aqui](https://www.reddit.com/r/hackintosh/comments/cfjyla/i_unleashed_a_plague_upon_you_guys_and_i_am_sorry/) (em inglês). Esses problemas podem, em grande parte, ser aliviados ao calcular um valor de `slide`: [Calculando o Valor de Slide do KASLR](https://deomkds.github.io/OpenCore-Install-Guide/extras/kaslr-fix.html).

Ah, e para melhorar ainda mais, a Intel lançou proteções de memória que quebram completamente um monte de correções de firmware fornecidas pelo AptioMemoryFix/OpenCore. Especificamente, qualquer patch de memória fornecido é sobrescrito e acabam nunca sendo utilizados. Por sorte, o OpenCore introduziu uma nova *quirk* chamada `ProtectUefiServices`, que ajuda a corrigir isso ao garantir que os patches são aplicados mesmo depois de serem redefinidos.
