# Rede

Essa seção é específca para controladores dedicados. Geralmente, a maioria dos controladores é suportado nativamente, como com os Aquantia, ou possuem drivers feitos pelo Mieze:

* [IntelMausiEthernet.kext](https://github.com/Mieze/IntelMausiEthernet)
  * Para a maioria dos controladores Intel.
* [SmallTree-I211-AT-patch](https://github.com/khronokernel/SmallTree-I211-AT-patch/releases)
  * Para a I211-AT, que é comumente encotrada em placas AMD.
* [AtherosE2200Ethernet.kext](https://github.com/Mieze/AtherosE2200Ethernet)
  * Para a maioria dos controladores Atheros.
* [RealtekRTL8111](https://github.com/Mieze/RTL8111_driver_for_OS_X)
  * Para Realtek Gigabit Ethernet.
* [LucyRTL8125Ethernet](https://github.com/Mieze/LucyRTL8125Ethernet)
  * Para Realtek 2.5Gb Ethernet.

Alguns NICs de consumidor não possuem suporte, como:

* Realtek L8200A (encontrado somente em placas Asus).
* Intel I225-V.

No caso da Intel i225-V, é possível falsificar uma i225LM, que possui suporte oficial: [Exemplo](https://deomkds.github.io/OpenCore-Install-Guide/config.plist/comet-lake.html#deviceproperties).

Esses problemas surgem quando são envolvidos controladores integrados para servidores ou hardware dedicado como o Mellanox MNPA19-XTR 10Gbe NIC. Será preciso ficar de olho e ver se os fabricantes ou a comunidade *hackintosh* desenvolveu drivers. Como alternativa, é possível ficar no caminho seguro e comprar um Aquantia AQtion AQC-107 10Gbe NIC, visto que esses controladores são distribuídos com o iMacPro1,1, o Macmini8,1 e o MacPro7,1, o que significa suporte nativo completo. Observe que [certas marcas precisam de patches](https://www.insanelymac.com/forum/topic/330614-aquantia-10-gb-ethernet-support-thread-10132-upwards/) (em inglês).

[SmallTree](https://www.small-tree.com/categories/10gb-ethernet-cards/) é também uma outra opção popular.

**Controladores a se evitar**

* NICs Intel para Servidores (incluíndo tanto 1Gbe e 10Gbe. [Existem maneiras de contornar em NICs X520 e X540](https://www.tonymacx86.com/threads/how-to-build-your-own-imac-pro-successful-build-extended-guide.229353/) (em inglês).
* NICs HP para Servidores (incluindo tanto 1Gbe e 10Gbe, geralmente são Qlogic com marca da HP).
* NICs da Dell para Servidores (incluíndo tanto 1Gbe e 10Gbe, geralmente são Broadcom ou Intel com marca da Dell).
* NICs da Mellanox.
