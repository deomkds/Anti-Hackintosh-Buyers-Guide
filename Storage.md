# Armazenamento

Armazenamento é uma seção que pode ser um tanto confusa, já que existem muitos relatos confusos sobre dispositivos baseados em PCIe/NVMe. Muitos desses relatos são baseados em informações antigas da época em que as unidades PCIe/NVMe não eram suportadas nativamente, o tamanho dos blocos era importante ou exigiam `kexts` e drivers `.efi`. No entanto, o macOS 10.13 High Sierra trouxe suporte nativo para esses tipos de unidades. Mesmo assim, certas unidades ainda não funcionam e podem causar instabilidade caso não sejam removidas ou bloqueadas no nível da ACPI.

O outro grande problema gira em torno de todos as unidades NVMe da Samsung. Mais especificamente, elas são conhecidas por causarem lentidão no macOS, não funcionarem muito bem com o TRIM e até mesmo criar instabilidade em alguns momentos. Isto deve-se ao controlador Phoenix encontrado nas unidades da Samsung, que o macOS não gosta muito, preferindo muito mais os controladores Phison encontrado nas unidades Sabrent Rocket e os controladores proprietários da Western Digital (WD SN750). A maneira mais fácil de observar isso é durante a inicialização: a maioria dos sistemas que utilizam unidades da Samsung apresentam tempos de inicialização extra longos e temperaturas mais altas no SSD devido à falha do software responsável pelo TRIM (o TRIM a nível de hardware ainda deve estar habilitado, mas sem parcialidade).

Algumas unidades NVMe mais antigas da Intel e da Kingston também apresentam esses problemas.

E, embora não seja mais um problema, observe que todas as unidades PCIe da Apple são baseadas em setores de 4k. Para obter um suporte melhor, somente escolha unidades com tais setores.

**Observação para Usuários de Notebooks**: SSDs Intel nem sempre funcionam muito bem com notebooks e podem causar problemas. Evite sempre que possível.

**Opções de SSD/Armazenamento Que NÃO São Suportadas:**

* Qualquer unidade baseada em eMMC (encontrado mais comumente em netbooks, alguns tablets e computadores de entrada).
* Samsung PM981 e PM991 (encontrados comumente em computadores OEM como notebooks).
  * Mesmo que o PM981 tenha sido corrigido com a versão 1.0.2 da [NVMeFix](https://github.com/acidanthera/NVMeFix/releases), ainda existe uma abundância de problemas de *kernel panic*.
* Micron 2200S
  * Muitos usuários reportaram problemas com essa unidade.

**SSDs a se evitar**

Samsung:

* Samsung 970 Evo Plus (embora não seja suportado nativamente de fábrica, uma [atualização de firmware da Samsung](https://www.samsung.com/semiconductor/minisite/ssd/download/tools/) permitirá que essas unidades funcionem no macOS).

Intel:

* Intel 600p ([Any fix for Intel 600p NVMe Drive? #1286](https://github.com/acidanthera/bugtracker/issues/1286) (em inglês)).
  * Observe que o SSD Intel 660p funciona.

Para todos os SSDs NVMe, é recomendado utilizar a [NVMeFix.kext](https://github.com/acidanthera/NVMeFix) para corrigir o consumo de energia das unidades.
