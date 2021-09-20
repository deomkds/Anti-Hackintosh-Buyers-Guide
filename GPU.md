# GPUs

~~Compra uma GPU RTX! Eu quero ver as pessoas sofrerem ao perceberem lentamente que elas não tem suporte nem mesmo no macOS 10.13 High Sierra. Deixa os fãs de Nvidia morrerem uma morte lenta e dolorosa para lembrarem de nunca cruzar o caminho do nosso senhor e salvador Tim Apple~~

Caso não queira ter dores de cabeça, fique longe de todas as GPUs Nvidia que não são baseadas na arquitetura Kepler. Atualmente (e talvez para sempre), as GPUs Turing e Volta não possuem nenhum tipo de suporte em nenhuma versão do macOS, enquanto que GPUs Pascal e Maxwell ficaram presas no macOS 10.13 High Sierra e, mesmo assim, ainda precisam dos Web Drivers, o que significa que não são GPUs nativas (isso é importante porque mostra outro ponto de falha).

> M-m-mas os drivers já foram lançados?

![Web Drivers](WebDrivers.gif)

Para GPUs, recomenda-se verificar o [Guia de Compra de GPUs](https://deomkds.github.io/GPU-Buyers-Guide/).
E para aqueles que estejam usando GPUs não suportadas, ainda há esperança! Com o nosso guia [**Como desativar sua GPU não suportada no macOS**](https://deomkds.github.io/Getting-Started-With-ACPI/Desktops/desktop-disable.html), até mesmo um Zé Ruela como você pode experimentar as glórias do macOS 10.14 Mojave e além!

> Existe alguma marca de GPU que eu devo evitar ao comprar?

Que bom que perguntou. A maioria dos fabricantes possuem um excelente histórico com *hackintoshes*, mas há duas marcas específicas que é bom evitar. Embora seja possível instalar o macOS usando essas GPUs, ainda há uma possibilidade alta de surgirem problemas como instabilidade e telas pretas.

* XFX (talvez funcione com o CSM/Legacy Mode desligado, então certifique-se de estar com o modo UEFI ativado).
* PowerColor
* MSI (especificamente Navi, mas Vega e Polaris estão de boa).

Observação: o suporte a Navi da AMD ainda é complicado, pois a  WhateverGreen não foi atualizada ainda.

::: tip Recomendações

Então a recomendação geral para GPUs é:

* GPUs AMD mais novas:
  * Polaris 10 e 20 (RX 4XX, 5XX).
  * Vega 10 e 20 (RX Vega 56, 64 e VII).
  * Navi 10 (RX 5XXX).
* Marcas recomendadas:
  * Sapphire.
  * Asus.
  * Gigabyte.

:::

**GPUs que não possuem NENHUM suporte**

Ampere

* RTX 3090
* RTX 3080
* RTX 3070

Turing

* Titan RTX
* RTX 2080 Ti
* RTX 2080 Super
* RTX 2080
* RTX 2070 Super
* RTX 2070
* RTX 2060 Super
* RTX 2060
* GTX 1660 Ti
* GTX 1660
* GTX 1650

* Quadro RTX 8000
* Quadro RTX 6000
* Quadro RTX 5000
* Quadro RTX 4000

Volta

* Titan V
* Titan V CEO Edition

* Quadro GV100

Lexa

* RX 540/X
* RX 550/X

**GPUs a se evitar**

Pascal

* GTX Titan X (GP 102-400 núcleo Pascal)
* GTX Titan XP (GP 102-450 núcleo Pascal)
* GTX 1080/TI
* GTX 1070/TI
* GTX 1060
* GTX 1050/TI
* GT 1030

* Quadro P400
* Quadro P600
* Quadro P620
* Quadro P1000
* Quadro P2000
* Quadro P4000
* Quadro P5000
* Quadro P6000
* Quadro GP100

Maxwell

* GTX Titan X (GM 200 núcleo Maxwell)
* GTX 980/TI
* GTX 970
* GTX 960
* GTX 950
* GTX 750/TI
* GTX 745

* Quadro K620
* Quadro K1200
* Quadro K220
* Quadro M2000
* Quadro M4000
* Quadro M5000
* Quadro M6000
