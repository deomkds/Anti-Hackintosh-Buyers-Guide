# Coolers

Os *liquid coolers* mais populares são *all-in-one* (AIO). Ou seja, são sistemas fechados vendidos em kits pré-montados. Caso esteja indeciso quanto a qual kit AIO comprar, o canal do YouTube [GamersNexus](https://www.youtube.com/channel/UChIs72whgZI9w6d6FhwGGHA) (em inglês) fornece reviews bastante detalhados. Os kits se conectam à placa-mãe por meio do conector USB 2.0 interno. Ao criar um mapa das USBs, será necessário levar isso em consideração ou será impossível controlar o cooler.

Excluíndo outros e a primeira geração de kits AIO da Asetek, eles terão memória volátil ou persistente.

1. NZXT e Corsair possuem memória volátil que persiste enquanto a fonte de alimentação estiver ligada (I).
2. Kits da EVGA possuem memória persistente. Mudar as configurações pelo software no Windows permite escrever na memória. Caso a fonte de alimentação seja desligada, as configurações não serão perdidas.

A maioria dos kits usa o mesmo hardware interno fornecido pela Asetek. É impossível controlá-los pela placa-mãe. Eles não foram criados para isso. O conector de três pinos que vai no *header* da CPU só existe para reportar a velocidade da bomba e dos ventiladores do radiador. A comunicação acontece em apenas uma direção. Outros kits AIO que não são baseados nos Asetek possuem a habilidade de serem controlados pela placa-mãe, por meio do *header* de 4 pinos da CPU. Thermaltake e Deep Cool são alguns exemplos.

Existem utilitários escritos em Python para controlar o kit disponíveis no GitHub, embora sejam geralmente desnecessários, visto que configurar uma vez pelo Windows já é o suficiente até que a fonte de alimentação seja desligada. O [liquidctl](https://github.com/jonasmalacofilho/liquidctl) é baseado em Python e foi criado para o macOS. Funciona com alguns modelos da NZXT, EVGA, e Corsair.

Não existem problemas de compatibilidade com os kits AIO e o macOS. Eles funcionarão independente do sistema operacional utilizado desde que sejam configurados inicialmente com o Windows.
