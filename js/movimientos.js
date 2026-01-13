const movimientos = {
  m1: {
    nombre: "Destructor (Pound)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 40,
    precision: 100,
    pp: 35,
    descripcion: "Golpea con las patas o la cola."
  },
  m2: {
    nombre: "Golpe Kárate (Karate chop)",
    tipo: "Lucha",
    categoria: "Físico",
    potencia: 50,
    precision: 100,
    pp: 25,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m3: {
    nombre: "Doble Bofetón (Double slap)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 15,
    precision: 85,
    pp: 10,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m4: {
    nombre: "Puño Cometa (Comet punch)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 18,
    precision: 85,
    pp: 15,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m5: {
    nombre: "Megapuño (Mega punch)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 80,
    precision: 85,
    pp: 20,
    descripcion: "Un puñetazo de gran potencia."
  },
  m6: {
    nombre: "Día de Pago (Pay day)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 40,
    precision: 100,
    pp: 20,
    descripcion: "Arroja monedas al objetivo y las recupera al final del combate."
  },
  m7: {
    nombre: "Puño Fuego (Fire punch)",
    tipo: "Fuego",
    categoria: "Físico",
    potencia: 75,
    precision: 100,
    pp: 15,
    descripcion: "Puñetazo ardiente que puede causar quemaduras."
  },
  m8: {
    nombre: "Puño Hielo (Ice punch)",
    tipo: "Hielo",
    categoria: "Físico",
    potencia: 75,
    precision: 100,
    pp: 15,
    descripcion: "Puñetazo helado que puede llegar a congelar."
  },
  m9: {
    nombre: "Puño Trueno (Thunder punch)",
    tipo: "Eléctrico",
    categoria: "Físico",
    potencia: 75,
    precision: 100,
    pp: 15,
    descripcion: "Puñetazo eléctrico que puede paralizar al adversario."
  },
  m10: {
    nombre: "Arañazo (Scratch)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 40,
    precision: 100,
    pp: 35,
    descripcion: "Araña con afiladas garras."
  },
  m11: {
    nombre: "Agarre (Vice grip)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 55,
    precision: 100,
    pp: 30,
    descripcion: "Atrapa y atenaza al objetivo."
  },
  m12: {
    nombre: "Guillotina (Guillotine)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 0,
    precision: 30,
    pp: 5,
    descripcion: "Ataque cortante que debilita al oponente de un golpe si acierta."
  },
  m13: {
    nombre: "Viento Cortante (Razor wind)",
    tipo: "Normal",
    categoria: "Especial",
    potencia: 80,
    precision: 100,
    pp: 10,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m14: {
    nombre: "Danza Espada (Swords dance)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 20,
    descripcion: "Baile frenético que aumenta mucho el Ataque."
  },
  m15: {
    nombre: "Corte (Cut)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 50,
    precision: 95,
    pp: 30,
    descripcion: "Corta al adversario con garras, guadañas, etc."
  },
  m16: {
    nombre: "Tornado (Gust)",
    tipo: "Volador",
    categoria: "Especial",
    potencia: 40,
    precision: 100,
    pp: 35,
    descripcion: "Crea un tornado con las alas y lo lanza contra el objetivo."
  },
  m17: {
    nombre: "Ataque Ala (Wing attack)",
    tipo: "Volador",
    categoria: "Físico",
    potencia: 60,
    precision: 100,
    pp: 35,
    descripcion: "Golpea al objetivo con unas grandes alas."
  },
  m18: {
    nombre: "Remolino (Whirlwind)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 20,
    descripcion: "Se lleva al objetivo, que es cambiado por otro Pokémon. Si es un Pokémon salvaje, acaba el combate."
  },
  m19: {
    nombre: "Vuelo (Fly)",
    tipo: "Volador",
    categoria: "Físico",
    potencia: 90,
    precision: 95,
    pp: 15,
    descripcion: "El usuario vuela en el primer turno y ataca en el segundo."
  },
  m20: {
    nombre: "Atadura (Bind)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 15,
    precision: 85,
    pp: 20,
    descripcion: "Ata y oprime de cuatro a cinco turnos."
  },
  m21: {
    nombre: "Atizar (Slam)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 80,
    precision: 75,
    pp: 20,
    descripcion: "Golpea con la cola o con lianas, por ejemplo, para causar daño al objetivo."
  },
  m22: {
    nombre: "Látigo Cepa (Vine whip)",
    tipo: "Planta",
    categoria: "Físico",
    potencia: 45,
    precision: 100,
    pp: 25,
    descripcion: "Azota al objetivo con ramas finas."
  },
  m23: {
    nombre: "Pisotón (Stomp)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 65,
    precision: 100,
    pp: 20,
    descripcion: "Tremendo pisotón que puede hacer que el objetivo se amedrente."
  },
  m24: {
    nombre: "Doble Patada (Double kick)",
    tipo: "Lucha",
    categoria: "Físico",
    potencia: 30,
    precision: 100,
    pp: 30,
    descripcion: "Una patada doble. Golpea dos veces."
  },
  m25: {
    nombre: "Megapatada (Mega kick)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 120,
    precision: 75,
    pp: 5,
    descripcion: "Patada de extrema fuerza."
  },
  m26: {
    nombre: "Patada Salto (Jump kick)",
    tipo: "Lucha",
    categoria: "Físico",
    potencia: 100,
    precision: 95,
    pp: 10,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m27: {
    nombre: "Patada Giro (Rolling kick)",
    tipo: "Lucha",
    categoria: "Físico",
    potencia: 60,
    precision: 85,
    pp: 15,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m28: {
    nombre: "Ataque Arena (Sand attack)",
    tipo: "Tierra",
    categoria: "Estado",
    potencia: 0,
    precision: 100,
    pp: 15,
    descripcion: "Arroja arena a la cara y baja la Precisión."
  },
  m29: {
    nombre: "Golpe Cabeza (Headbutt)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 70,
    precision: 100,
    pp: 15,
    descripcion: "Potente cabezazo que puede amedrentar al objetivo."
  },
  m30: {
    nombre: "Cornada (Horn attack)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 65,
    precision: 100,
    pp: 25,
    descripcion: "Ataca al objetivo con una cornada."
  },
  m31: {
    nombre: "Ataque Furia (Fury attack)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 15,
    precision: 85,
    pp: 20,
    descripcion: "Cornea al objetivo de dos a cinco veces."
  },
  m32: {
    nombre: "Perforador (Horn drill)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 0,
    precision: 30,
    pp: 5,
    descripcion: "Ataque con un cuerno giratorio que fulmina de un solo golpe al objetivo si lo alcanza."
  },
  m33: {
    nombre: "Placaje (Tackle)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 40,
    precision: 100,
    pp: 35,
    descripcion: "Embestida con todo el cuerpo."
  },
  m34: {
    nombre: "Golpe Cuerpo (Body slam)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 85,
    precision: 100,
    pp: 15,
    descripcion: "Salta sobre el objetivo con todo su peso y puede llegar a paralizarlo."
  },
  m35: {
    nombre: "Constricción (Wrap)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 15,
    precision: 90,
    pp: 20,
    descripcion: "Oprime al objetivo de cuatro a cinco turnos con ramas o con su cuerpo."
  },
  m36: {
    nombre: "Derribo (Take down)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 90,
    precision: 85,
    pp: 20,
    descripcion: "Carga desmedida que también hiere al agresor."
  },
  m37: {
    nombre: "Golpe (Thrash)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 120,
    precision: 100,
    pp: 10,
    descripcion: "Ataque de dos a tres turnos que acaba confundiendo al agresor."
  },
  m38: {
    nombre: "Doble Filo (Double edge)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 120,
    precision: 100,
    pp: 15,
    descripcion: "Ataque arriesgado que también hiere al agresor."
  },
  m39: {
    nombre: "Látigo (Tail whip)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 100,
    pp: 30,
    descripcion: "Agita la cola para bajar la Defensa del equipo rival."
  },
  m40: {
    nombre: "Picotazo Veneno (Poison sting)",
    tipo: "Veneno",
    categoria: "Físico",
    potencia: 15,
    precision: 100,
    pp: 35,
    descripcion: "Lanza un aguijón tóxico que puede envenenar al  objetivo."
  },
  m41: {
    nombre: "Doble Ataque (Twineedle)",
    tipo: "Bicho",
    categoria: "Físico",
    potencia: 25,
    precision: 100,
    pp: 20,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m42: {
    nombre: "Pin Misil (Pin missile)",
    tipo: "Bicho",
    categoria: "Físico",
    potencia: 25,
    precision: 95,
    pp: 20,
    descripcion: "Lanza finas púas que hieren de dos a cinco veces."
  },
  m43: {
    nombre: "Malicioso (Leer)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 100,
    pp: 30,
    descripcion: "Intimida a los rivales para bajar su Defensa."
  },
  m44: {
    nombre: "Mordisco (Bite)",
    tipo: "Siniestro",
    categoria: "Físico",
    potencia: 60,
    precision: 100,
    pp: 25,
    descripcion: "Un voraz bocado que puede amedrentar al objetivo."
  },
  m45: {
    nombre: "Gruñido (Growl)",
    tipo: "Sonido",
    categoria: "Estado",
    potencia: 0,
    precision: 100,
    pp: 40,
    descripcion: "Dulce gruñido que reduce el Ataque del equipo rival."
  },
  m46: {
    nombre: "Rugido (Roar)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 20,
    descripcion: "Se lleva al objetivo, que es cambiado por otro  Pokémon. Si es un Pokémon salvaje, acaba el  combate."
  },
  m47: {
    nombre: "Canto (Sing)",
    tipo: "Sonido",
    categoria: "Estado",
    potencia: 0,
    precision: 55,
    pp: 15,
    descripcion: "Cancioncilla que hace dormir profundamente al  objetivo."
  },
  m48: {
    nombre: "Supersónico (Supersonic)",
    tipo: "Sonido",
    categoria: "Estado",
    potencia: 0,
    precision: 55,
    pp: 20,
    descripcion: "Raras ondas sónicas que confunden al objetivo."
  },
  m49: {
    nombre: "Bomba Sónica (Sonic boom)",
    tipo: "Normal",
    categoria: "Especial",
    potencia: 0,
    precision: 90,
    pp: 20,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m50: {
    nombre: "Anulación (Disable)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 100,
    pp: 20,
    descripcion: "Desactiva el último movimiento del objetivo durante  cuatro turnos."
  },
  m51: {
    nombre: "Ácido (Acid)",
    tipo: "Veneno",
    categoria: "Especial",
    potencia: 40,
    precision: 100,
    pp: 30,
    descripcion: "Rocía a los enemigos con un ácido corrosivo.  Puede bajar la Defensa Especial."
  },
  m52: {
    nombre: "Ascuas (Ember)",
    tipo: "Fuego",
    categoria: "Especial",
    potencia: 40,
    precision: 100,
    pp: 25,
    descripcion: "Ataca con llamas pequeñas que pueden causar  quemaduras."
  },
  m53: {
    nombre: "Lanzallamas (Flamethrower)",
    tipo: "Fuego",
    categoria: "Especial",
    potencia: 90,
    precision: 100,
    pp: 15,
    descripcion: "Ataca con una gran ráfaga de fuego que puede causar quemaduras."
  },
  m54: {
    nombre: "Neblina (Mist)",
    tipo: "Hielo",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 30,
    descripcion: "Rodea de fina niebla al usuario y protege las  características de su equipo durante cinco turnos."
  },
  m55: {
    nombre: "Pistola Agua (Water gun)",
    tipo: "Agua",
    categoria: "Especial",
    potencia: 40,
    precision: 100,
    pp: 25,
    descripcion: "Ataca disparando agua con gran potencia."
  },
  m56: {
    nombre: "Hidrobomba (Hydro pump)",
    tipo: "Agua",
    categoria: "Especial",
    potencia: 110,
    precision: 80,
    pp: 5,
    descripcion: "Lanza una gran masa de agua a presión para atacar."
  },
  m57: {
    nombre: "Surf (Surf)",
    tipo: "Agua",
    categoria: "Especial",
    potencia: 90,
    precision: 100,
    pp: 15,
    descripcion: "Inunda el terreno de combate con una ola gigante."
  },
  m58: {
    nombre: "Rayo Hielo (Ice beam)",
    tipo: "Hielo",
    categoria: "Especial",
    potencia: 90,
    precision: 100,
    pp: 10,
    descripcion: "Rayo de hielo que puede llegar a congelar."
  },
  m59: {
    nombre: "Ventisca (Blizzard)",
    tipo: "Hielo",
    categoria: "Especial",
    potencia: 110,
    precision: 70,
    pp: 5,
    descripcion: "Tormenta de hielo que puede llegar a congelar."
  },
  m60: {
    nombre: "Psicorrayo (Psybeam)",
    tipo: "Psíquico",
    categoria: "Especial",
    potencia: 65,
    precision: 100,
    pp: 20,
    descripcion: "Extraño rayo que puede causar confusión."
  },
  m61: {
    nombre: "Rayo Burbuja (Bubble beam)",
    tipo: "Agua",
    categoria: "Especial",
    potencia: 65,
    precision: 100,
    pp: 20,
    descripcion: "Diluvio de burbujas que puede bajar la Velocidad."
  },
  m62: {
    nombre: "Rayo Aurora (Aurora beam)",
    tipo: "Hielo",
    categoria: "Especial",
    potencia: 65,
    precision: 100,
    pp: 20,
    descripcion: "Rayo multicolor que puede reducir el Ataque."
  },
  m63: {
    nombre: "Hiperrayo (Hyper beam)",
    tipo: "Normal",
    categoria: "Especial",
    potencia: 150,
    precision: 90,
    pp: 5,
    descripcion: "Es eficaz, pero el atacante deberá descansar en el  siguiente turno."
  },
  m64: {
    nombre: "Picotazo (Peck)",
    tipo: "Volador",
    categoria: "Físico",
    potencia: 35,
    precision: 100,
    pp: 35,
    descripcion: "Ensarta al objetivo con un cuerno o pico punzante."
  },
  m65: {
    nombre: "Pico Taladro (Drill peck)",
    tipo: "Volador",
    categoria: "Físico",
    potencia: 80,
    precision: 100,
    pp: 20,
    descripcion: "Picotazo giratorio y perforador muy potente."
  },
  m66: {
    nombre: "Sumisión (Submission)",
    tipo: "Lucha",
    categoria: "Físico",
    potencia: 80,
    precision: 80,
    pp: 20,
    descripcion: "El usuario se lanza al suelo con el oponente en brazos y también se hace un poco de daño."
  },
  m67: {
    nombre: "Patada Baja (Low kick)",
    tipo: "Lucha",
    categoria: "Físico",
    potencia: 0,
    precision: 100,
    pp: 20,
    descripcion: "Patada baja que derriba al oponente. Cuanto más pesa el objetivo, más daño le causa."
  },
  m68: {
    nombre: "Contraataque (Counter)",
    tipo: "Lucha",
    categoria: "Físico",
    potencia: 0,
    precision: 100,
    pp: 20,
    descripcion: "Devuelve un golpe físico por duplicado."
  },
  m69: {
    nombre: "Sísmico (Seismic toss)",
    tipo: "Lucha",
    categoria: "Físico",
    potencia: 0,
    precision: 100,
    pp: 20,
    descripcion: "Aprovecha la gravedad para derribar al objetivo. Le resta tantos PS como nivel tenga el usuario."
  },
  m70: {
    nombre: "Fuerza (Strength)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 80,
    precision: 100,
    pp: 15,
    descripcion: "Propina un potente puñetazo con todas sus fuerzas."
  },
  m71: {
    nombre: "Absorber (Absorb)",
    tipo: "Planta",
    categoria: "Especial",
    potencia: 20,
    precision: 100,
    pp: 25,
    descripcion: "Un ataque que absorbe nutrientes. Quien lo usa recupera la mitad de los PS del daño que produce."
  },
  m72: {
    nombre: "Megaagotar (Mega drain)",
    tipo: "Planta",
    categoria: "Especial",
    potencia: 40,
    precision: 100,
    pp: 15,
    descripcion: "Un ataque que absorbe nutrientes. Quien lo usa recupera la mitad de los PS del daño que produce."
  },
  m73: {
    nombre: "Drenadoras (Leech seed)",
    tipo: "Planta",
    categoria: "Estado",
    potencia: 0,
    precision: 90,
    pp: 10,
    descripcion: "Planta semillas que absorben PS del objetivo en cada turno y que le sirven para recuperarse."
  },
  m74: {
    nombre: "Desarrollo (Growth)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 20,
    descripcion: "Hace que su cuerpo crezca a marchas forzadas con lo que aumenta su Ataque y Ataque Especial."
  },
  m75: {
    nombre: "Hoja Afilada (Razor leaf)",
    tipo: "Planta",
    categoria: "Físico",
    potencia: 55,
    precision: 95,
    pp: 25,
    descripcion: "Corta con hojas afiladas. Un ataque que suele ser crítico."
  },
  m76: {
    nombre: "Rayo Solar (Solar beam)",
    tipo: "Planta",
    categoria: "Especial",
    potencia: 120,
    precision: 100,
    pp: 10,
    descripcion: "El usuario absorbe luz en el primer turno y en el segundo lanza un potente rayo de energía."
  },
  m77: {
    nombre: "Polvo Veneno (Poison powder)",
    tipo: "Veneno",
    categoria: "Estado",
    potencia: 0,
    precision: 75,
    pp: 35,
    descripcion: "Polvo tóxico que envenena al objetivo."
  },
  m78: {
    nombre: "Paralizador (Stun spore)",
    tipo: "Planta",
    categoria: "Estado",
    potencia: 0,
    precision: 75,
    pp: 30,
    descripcion: "Esparce polvo que paraliza al objetivo."
  },
  m79: {
    nombre: "Somnífero (Sleep powder)",
    tipo: "Planta",
    categoria: "Estado",
    potencia: 0,
    precision: 75,
    pp: 15,
    descripcion: "Esparce polvo que duerme al objetivo."
  },
  m80: {
    nombre: "Danza Pétalo (Petal dance)",
    tipo: "Planta",
    categoria: "Especial",
    potencia: 120,
    precision: 100,
    pp: 10,
    descripcion: "Lanza pétalos de dos a tres turnos y acaba  confundiendo al atacante."
  },
  m81: {
    nombre: "Disparo Demora (String shot)",
    tipo: "Bicho",
    categoria: "Estado",
    potencia: 0,
    precision: 95,
    pp: 40,
    descripcion: "Lanza seda a los rivales y reduce mucho su Velocidad."
  },
  m82: {
    nombre: "Furia Dragón (Dragon rage)",
    tipo: "Dragón",
    categoria: "Especial",
    potencia: 0,
    precision: 100,
    pp: 10,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m83: {
    nombre: "Giro Fuego (Fire spin)",
    tipo: "Fuego",
    categoria: "Especial",
    potencia: 35,
    precision: 85,
    pp: 15,
    descripcion: "Un aro de fuego que atrapa al objetivo de cuatro a  cinco turnos."
  },
  m84: {
    nombre: "Impactrueno (Thunder shock)",
    tipo: "Eléctrico",
    categoria: "Especial",
    potencia: 40,
    precision: 100,
    pp: 30,
    descripcion: "Ataque eléctrico que puede paralizar al objetivo."
  },
  m85: {
    nombre: "Rayo (Thunderbolt)",
    tipo: "Eléctrico",
    categoria: "Especial",
    potencia: 90,
    precision: 100,
    pp: 15,
    descripcion: "Potente ataque eléctrico que puede paralizar al  objetivo."
  },
  m86: {
    nombre: "Onda Trueno (Thunder wave)",
    tipo: "Eléctrico",
    categoria: "Estado",
    potencia: 0,
    precision: 90,
    pp: 20,
    descripcion: "Una ligera descarga que paraliza al objetivo si lo  alcanza."
  },
  m87: {
    nombre: "Trueno (Thunder)",
    tipo: "Eléctrico",
    categoria: "Especial",
    potencia: 110,
    precision: 70,
    pp: 10,
    descripcion: "Un poderoso rayo que daña al objetivo y puede  paralizarlo."
  },
  m88: {
    nombre: "Lanzarrocas (Rock throw)",
    tipo: "Roca",
    categoria: "Físico",
    potencia: 50,
    precision: 90,
    pp: 15,
    descripcion: "Tira una pequeña roca al objetivo."
  },
  m89: {
    nombre: "Terremoto (Earthquake)",
    tipo: "Tierra",
    categoria: "Físico",
    potencia: 100,
    precision: 100,
    pp: 10,
    descripcion: "Un terremoto que afecta a todos los Pokémon que estén a su alrededor."
  },
  m90: {
    nombre: "Fisura (Fissure)",
    tipo: "Tierra",
    categoria: "Físico",
    potencia: 0,
    precision: 30,
    pp: 5,
    descripcion: "Abre una grieta en el suelo y mete al objetivo en ella.  Fulmina en un golpe."
  },
  m91: {
    nombre: "Excavar (Dig)",
    tipo: "Tierra",
    categoria: "Físico",
    potencia: 80,
    precision: 100,
    pp: 10,
    descripcion: "El usuario cava durante el primer turno y ataca en el segundo."
  },
  m92: {
    nombre: "Tóxico (Toxic)",
    tipo: "Veneno",
    categoria: "Estado",
    potencia: 0,
    precision: 90,
    pp: 10,
    descripcion: "Envenena gravemente al objetivo y causa un daño  mayor en cada turno."
  },
  m93: {
    nombre: "Confusión (Confusion)",
    tipo: "Psíquico",
    categoria: "Especial",
    potencia: 50,
    precision: 100,
    pp: 25,
    descripcion: "Débil ataque telequinético que puede causar confusión."
  },
  m94: {
    nombre: "Psíquico (Psychic)",
    tipo: "Psíquico",
    categoria: "Especial",
    potencia: 90,
    precision: 100,
    pp: 10,
    descripcion: "Fuerte ataque telequinético que puede bajar la Defensa Especial del objetivo."
  },
  m95: {
    nombre: "Hipnosis (Hypnosis)",
    tipo: "Psíquico",
    categoria: "Estado",
    potencia: 0,
    precision: 60,
    pp: 20,
    descripcion: "Ataque hipnótico que hace dormir profundamente al objetivo."
  },
  m96: {
    nombre: "Meditación (Meditate)",
    tipo: "Psíquico",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 40,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m97: {
    nombre: "Agilidad (Agility)",
    tipo: "Psíquico",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 30,
    descripcion: "Relaja el cuerpo para ganar mucha Velocidad."
  },
  m98: {
    nombre: "Ataque Rápido (Quick attack)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 40,
    precision: 100,
    pp: 30,
    descripcion: "Ataca al objetivo a gran velocidad. Este movimiento tiene prioridad alta."
  },
  m99: {
    nombre: "Furia (Rage)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 20,
    precision: 100,
    pp: 20,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m100: {
    nombre: "Teletransporte (Teleport)",
    tipo: "Psíquico",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 20,
    descripcion: "Permite al usuario cambiarse por otro Pokémon del equipo, si es posible. Si un Pokémon salvaje usa este movimiento, huye del combate."
  },
  m101: {
    nombre: "Tinieblas (Night shade)",
    tipo: "Fantasma",
    categoria: "Especial",
    potencia: 0,
    precision: 100,
    pp: 15,
    descripcion: "Produce un espejismo ante el objetivo, que pierde tantos PS como nivel tenga el usuario."
  },
  m102: {
    nombre: "Mimético (Mimic)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "Copia el último movimiento usado por el objetivo, y  puede utilizarlo mientras esté en el combate."
  },
  m103: {
    nombre: "Chirrido (Screech)",
    tipo: "Sonido",
    categoria: "Estado",
    potencia: 0,
    precision: 85,
    pp: 40,
    descripcion: "Alarido agudo que reduce mucho la Defensa del  objetivo."
  },
  m104: {
    nombre: "Doble Equipo (Double team)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 15,
    descripcion: "Crea copias de sí mismo para mejorar la Evasión."
  },
  m105: {
    nombre: "Recuperación (Recover)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 5,
    descripcion: "Restaura hasta la mitad de los PS máximos."
  },
  m106: {
    nombre: "Fortaleza (Harden)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 30,
    descripcion: "Tensa la musculatura del usuario para aumentar la  Defensa."
  },
  m107: {
    nombre: "Reducción (Minimize)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "El usuario mengua para aumentar mucho la Evasión."
  },
  m108: {
    nombre: "Pantalla de Humo (Smokescreen)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 100,
    pp: 20,
    descripcion: "Baja la Precisión del objetivo con una nube de humo  o tinta."
  },
  m109: {
    nombre: "Rayo Confuso (Confuse ray)",
    tipo: "Fantasma",
    categoria: "Estado",
    potencia: 0,
    precision: 100,
    pp: 10,
    descripcion: "Rayo siniestro que confunde al objetivo."
  },
  m110: {
    nombre: "Refugio (Withdraw)",
    tipo: "Agua",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 40,
    descripcion: "El usuario se resguarda en su coraza, por lo que le sube la Defensa."
  },
  m111: {
    nombre: "Rizo Defensa (Defense curl)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 40,
    descripcion: "Se enrosca para ocultar sus puntos débiles y aumentar la Defensa."
  },
  m112: {
    nombre: "Barrera (Barrier)",
    tipo: "Psíquico",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 20,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m113: {
    nombre: "Pantalla de Luz (Light screen)",
    tipo: "Psíquico",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 30,
    descripcion: "Pared de luz que reduce durante cinco turnos el daño producido por los ataques especiales."
  },
  m114: {
    nombre: "Niebla (Haze)",
    tipo: "Hielo",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 30,
    descripcion: "Neblina que elimina los cambios de características de todos los Pokémon en combate."
  },
  m115: {
    nombre: "Reflejo (Reflect)",
    tipo: "Psíquico",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 20,
    descripcion: "Pared de luz que reduce durante cinco turnos el daño producido por los ataques físicos."
  },
  m116: {
    nombre: "Foco Energía (Focus energy)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 30,
    descripcion: "Concentra energía para aumentar las posibilidades de asestar un golpe crítico."
  },
  m117: {
    nombre: "Venganza (Bide)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m118: {
    nombre: "Metrónomo (Metronome)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "Mueve un dedo y estimula su cerebro para usar al azar casi cualquier movimiento."
  },
  m119: {
    nombre: "Espejo (Mirror move)",
    tipo: "Volador",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 20,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m120: {
    nombre: "Autodestrucción (Self destruct)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 200,
    precision: 100,
    pp: 5,
    descripcion: "El atacante explota y hiere a todos a su alrededor.  El usuario se debilita de inmediato."
  },
  m121: {
    nombre: "Bomba Huevo (Egg bomb)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 100,
    precision: 75,
    pp: 10,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m122: {
    nombre: "Lengüetazo (Lick)",
    tipo: "Fantasma",
    categoria: "Físico",
    potencia: 30,
    precision: 100,
    pp: 30,
    descripcion: "Una lengua ataca al objetivo. Puede causar parálisis."
  },
  m123: {
    nombre: "Polución (Smog)",
    tipo: "Veneno",
    categoria: "Especial",
    potencia: 30,
    precision: 70,
    pp: 20,
    descripcion: "Lanza un ataque con gases tóxicos que pueden llegar a envenenar."
  },
  m124: {
    nombre: "Residuos (Sludge)",
    tipo: "Veneno",
    categoria: "Especial",
    potencia: 65,
    precision: 100,
    pp: 20,
    descripcion: "Arroja residuos al objetivo. Puede llegar a envenenar."
  },
  m125: {
    nombre: "Hueso Palo (Bone club)",
    tipo: "Tierra",
    categoria: "Físico",
    potencia: 65,
    precision: 85,
    pp: 20,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m126: {
    nombre: "Llamarada (Fire blast)",
    tipo: "Fuego",
    categoria: "Especial",
    potencia: 110,
    precision: 85,
    pp: 5,
    descripcion: "Llama intensa que chamusca y puede causar  quemaduras."
  },
  m127: {
    nombre: "Cascada (Waterfall)",
    tipo: "Agua",
    categoria: "Físico",
    potencia: 80,
    precision: 100,
    pp: 15,
    descripcion: "Embiste con un gran impulso que puede llegar a amedrentar."
  },
  m128: {
    nombre: "Tenaza (Clamp)",
    tipo: "Agua",
    categoria: "Físico",
    potencia: 35,
    precision: 85,
    pp: 15,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m129: {
    nombre: "Rapidez (Swift)",
    tipo: "Normal",
    categoria: "Especial",
    potencia: 60,
    precision: 0,
    pp: 20,
    descripcion: "Lanza rayos en forma de estrella que no fallan nunca."
  },
  m130: {
    nombre: "Cabezazo (Skull bash)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 130,
    precision: 100,
    pp: 10,
    descripcion: "El usuario se prepara y sube su Defensa en el primer turno y en el segundo arremete con un cabezazo."
  },
  m131: {
    nombre: "Clavo Cañón (Spike cannon)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 20,
    precision: 100,
    pp: 15,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m132: {
    nombre: "Restricción (Constrict)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 10,
    precision: 100,
    pp: 35,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m133: {
    nombre: "Amnesia (Amnesia)",
    tipo: "Psíquico",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 20,
    descripcion: "El usuario olvida sus preocupaciones y aumenta mucho la Defensa Especial."
  },
  m134: {
    nombre: "Kinético (Kinesis)",
    tipo: "Psíquico",
    categoria: "Estado",
    potencia: 0,
    precision: 80,
    pp: 15,
    descripcion: "Dobla una cuchara para distraer al objetivo y bajar su nivel de Precisión."
  },
  m135: {
    nombre: "Amortiguador (Soft boiled)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 5,
    descripcion: "Restaura la mitad de los PS máximos del usuario."
  },
  m136: {
    nombre: "Pat. Salto Alta (High jump kick)",
    tipo: "Lucha",
    categoria: "Físico",
    potencia: 130,
    precision: 90,
    pp: 10,
    descripcion: "El usuario salta muy alto y da un rodillazo. Si falla, se hará daño."
  },
  m137: {
    nombre: "Deslumbrar (Glare)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 100,
    pp: 30,
    descripcion: "Intimida y asusta al objetivo con la mirada para dejarlo paralizado."
  },
  m138: {
    nombre: "Comesueños (Dream eater)",
    tipo: "Psíquico",
    categoria: "Especial",
    potencia: 100,
    precision: 100,
    pp: 15,
    descripcion: "Restaura al usuario la mitad del daño causado a un  objetivo dormido."
  },
  m139: {
    nombre: "Gas Venenoso (Poison gas)",
    tipo: "Veneno",
    categoria: "Estado",
    potencia: 0,
    precision: 90,
    pp: 40,
    descripcion: "Lanza una nube de gas tóxico al objetivo. Produce envenenamiento."
  },
  m140: {
    nombre: "Bombardeo (Barrage)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 15,
    precision: 85,
    pp: 20,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m141: {
    nombre: "Chupavidas (Leech life)",
    tipo: "Bicho",
    categoria: "Físico",
    potencia: 80,
    precision: 100,
    pp: 10,
    descripcion: "Restaura al usuario la mitad del daño causado al  objetivo."
  },
  m142: {
    nombre: "Beso Amoroso (Lovely kiss)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 75,
    pp: 10,
    descripcion: "Intimida al objetivo con una cara que asusta y le da un beso que lo deja dormido."
  },
  m143: {
    nombre: "Ataque Aéreo (Sky attack)",
    tipo: "Volador",
    categoria: "Físico",
    potencia: 140,
    precision: 90,
    pp: 5,
    descripcion: "Ataca durante dos turnos y suele asestar un golpe crítico. También puede amedrentar al objetivo."
  },
  m144: {
    nombre: "Transformación (Transform)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "El usuario se transforma en una copia del objetivo, con los mismos movimientos."
  },
  m145: {
    nombre: "Burbuja (Bubble)",
    tipo: "Agua",
    categoria: "Especial",
    potencia: 40,
    precision: 100,
    pp: 30,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m146: {
    nombre: "Puño Mareo (Dizzy punch)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 70,
    precision: 100,
    pp: 10,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m147: {
    nombre: "Espora (Spore)",
    tipo: "Planta",
    categoria: "Estado",
    potencia: 0,
    precision: 100,
    pp: 15,
    descripcion: "Esparce esporas que inducen al sueño."
  },
  m148: {
    nombre: "Destello (Flash)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 100,
    pp: 20,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m149: {
    nombre: "Psicoonda (Psywave)",
    tipo: "Psíquico",
    categoria: "Especial",
    potencia: 0,
    precision: 100,
    pp: 15,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m150: {
    nombre: "Salpicadura (Splash)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 40,
    descripcion: "No tiene ningún efecto. Solo salpica."
  },
  m151: {
    nombre: "Armadura Ácida (Acid armor)",
    tipo: "Veneno",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 20,
    descripcion: "Transforma la estructura celular para hacerse líquido y aumenta mucho la Defensa."
  },
  m152: {
    nombre: "Martillazo (Crabhammer)",
    tipo: "Agua",
    categoria: "Físico",
    potencia: 100,
    precision: 90,
    pp: 10,
    descripcion: "Golpea con fuerza con una pinza enorme. Suele asestar un golpe crítico."
  },
  m153: {
    nombre: "Explosión (Explosion)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 250,
    precision: 100,
    pp: 5,
    descripcion: "El atacante causa una grandísima explosión y hiere  a todos a su alrededor. El usuario se debilita de  inmediato."
  },
  m154: {
    nombre: "Golpes Furia (Fury swipes)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 18,
    precision: 80,
    pp: 15,
    descripcion: "Araña rápidamente de dos a cinco veces."
  },
  m155: {
    nombre: "Huesomerang (Bonemerang)",
    tipo: "Tierra",
    categoria: "Físico",
    potencia: 50,
    precision: 90,
    pp: 10,
    descripcion: "Lanza un hueso a modo de bumerán que golpea dos  veces."
  },
  m156: {
    nombre: "Descanso (Rest)",
    tipo: "Psíquico",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 5,
    descripcion: "Restaura todos los PS y cura todos los problemas de estado del usuario, que se duerme los dos turnos siguientes."
  },
  m157: {
    nombre: "Avalancha (Rock slide)",
    tipo: "Roca",
    categoria: "Físico",
    potencia: 75,
    precision: 90,
    pp: 10,
    descripcion: "Lanza grandes pedruscos. Puede hacer retroceder a  los rivales."
  },
  m158: {
    nombre: "Hipercolmillo (Hyper fang)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 80,
    precision: 90,
    pp: 15,
    descripcion: "Ataca con agudos colmillos. Puede amedrentar al objetivo."
  },
  m159: {
    nombre: "Afilar (Sharpen)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 30,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m160: {
    nombre: "Conversión (Conversion)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 30,
    descripcion: "Cambia el tipo del usuario por el del primero de sus  movimientos."
  },
  m161: {
    nombre: "Triataque (Tri attack)",
    tipo: "Normal",
    categoria: "Especial",
    potencia: 80,
    precision: 100,
    pp: 10,
    descripcion: "Ataque triple que puede paralizar, quemar o congelar al objetivo."
  },
  m162: {
    nombre: "Superdiente (Super fang)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 0,
    precision: 90,
    pp: 10,
    descripcion: "Finos colmillos que reducen a la mitad los PS del objetivo."
  },
  m163: {
    nombre: "Cuchillada (Slash)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 70,
    precision: 100,
    pp: 20,
    descripcion: "Ataca con cuchillas o con pinzas. Suele asestar un golpe crítico."
  },
  m164: {
    nombre: "Sustituto (Substitute)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "Utiliza parte de los PS propios para crear un sustituto que actúa como señuelo."
  },
  m165: {
    nombre: "Forcejeo (Struggle)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 50,
    precision: 0,
    pp: 1,
    descripcion: "Solo se usa como último recurso al acabarse los PP.  Hiere un poco al agresor."
  },
  m166: {
    nombre: "Esquema (Sketch)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 1,
    descripcion: "Aprende de forma permanente el último movimiento  utilizado por el objetivo. Es de un solo uso."
  },
  m167: {
    nombre: "Triple Patada (Triple kick)",
    tipo: "Lucha",
    categoria: "Físico",
    potencia: 10,
    precision: 90,
    pp: 10,
    descripcion: "Patea hasta tres veces seguidas y cada vez más fuerte."
  },
  m168: {
    nombre: "Ladrón (Thief)",
    tipo: "Siniestro",
    categoria: "Físico",
    potencia: 60,
    precision: 100,
    pp: 25,
    descripcion: "El agresor ataca y le quita el objeto al objetivo siempre y cuando no lleve ninguno."
  },
  m169: {
    nombre: "Telaraña (Spider web)",
    tipo: "Bicho",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m170: {
    nombre: "Telépata (Mind reader)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 5,
    descripcion: "El usuario adivina los movimientos del objetivo para  hacer que su siguiente ataque no falle."
  },
  m171: {
    nombre: "Pesadilla (Nightmare)",
    tipo: "Fantasma",
    categoria: "Estado",
    potencia: 0,
    precision: 100,
    pp: 15,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m172: {
    nombre: "Rueda Fuego (Flame wheel)",
    tipo: "Fuego",
    categoria: "Físico",
    potencia: 60,
    precision: 100,
    pp: 25,
    descripcion: "Ataca envuelto en fuego. Puede causar quemaduras."
  },
  m173: {
    nombre: "Ronquido (Snore)",
    tipo: "Sonido",
    categoria: "Especial",
    potencia: 50,
    precision: 100,
    pp: 15,
    descripcion: "Fuerte ronquido que solo puede usarse dormido. Puede amedrentar al objetivo."
  },
  m174: {
    nombre: "Maldición (Curse)",
    tipo: "Fantasma",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "Un movimiento que tiene efectos distintos si el usuario es de tipo Fantasma o no."
  },
  m175: {
    nombre: "Azote (Flail)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 0,
    precision: 100,
    pp: 15,
    descripcion: "Ataque frenético. Cuantos menos PS tenga el usuario, más daño producirá."
  },
  m176: {
    nombre: "Conversión2 (Conversion 2)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 30,
    descripcion: "El usuario cambia de tipo para hacerse resistente al último tipo de movimiento usado por el objetivo."
  },
  m177: {
    nombre: "Aerochorro (Aeroblast)",
    tipo: "Volador",
    categoria: "Especial",
    potencia: 100,
    precision: 95,
    pp: 5,
    descripcion: "Lanza un chorro de aire que suele asestar un golpe crítico."
  },
  m178: {
    nombre: "Esporagodón (Cotton spore)",
    tipo: "Planta",
    categoria: "Estado",
    potencia: 0,
    precision: 100,
    pp: 40,
    descripcion: "Adhiere esporas a los rivales para reducir mucho su  Velocidad."
  },
  m179: {
    nombre: "Inversión (Reversal)",
    tipo: "Lucha",
    categoria: "Físico",
    potencia: 0,
    precision: 100,
    pp: 15,
    descripcion: "Ataque desesperado que causa más daño cuantos menos PS tenga el usuario."
  },
  m180: {
    nombre: "Rencor (Spite)",
    tipo: "Fantasma",
    categoria: "Estado",
    potencia: 0,
    precision: 100,
    pp: 10,
    descripcion: "Da rienda suelta a su rencor para reducir cuatro PP  del último movimiento usado por el objetivo."
  },
  m181: {
    nombre: "Nieve Polvo (Powder snow)",
    tipo: "Hielo",
    categoria: "Especial",
    potencia: 40,
    precision: 100,
    pp: 25,
    descripcion: "Lanza nieve que puede llegar a congelar."
  },
  m182: {
    nombre: "Protección (Protect)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "Frena todos los ataques, pero puede fallar si se usa  repetidamente."
  },
  m183: {
    nombre: "Ultrapuño (Mach punch)",
    tipo: "Lucha",
    categoria: "Físico",
    potencia: 40,
    precision: 100,
    pp: 30,
    descripcion: "Puñetazo de velocidad fulminante. Este movimiento tiene prioridad alta."
  },
  m184: {
    nombre: "Cara Susto (Scary face)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 100,
    pp: 10,
    descripcion: "Asusta al objetivo para reducir mucho su Velocidad."
  },
  m185: {
    nombre: "Finta (Feint attack)",
    tipo: "Siniestro",
    categoria: "Físico",
    potencia: 60,
    precision: 0,
    pp: 20,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m186: {
    nombre: "Beso Dulce (Sweet kiss)",
    tipo: "Hada",
    categoria: "Estado",
    potencia: 0,
    precision: 75,
    pp: 10,
    descripcion: "Da un beso con tal dulzura que causa confusión."
  },
  m187: {
    nombre: "Tambor (Belly drum)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "Reduce la mitad de los PS máximos para mejorar al máximo el Ataque."
  },
  m188: {
    nombre: "Bomba Lodo (Sludge bomb)",
    tipo: "Veneno",
    categoria: "Especial",
    potencia: 90,
    precision: 100,
    pp: 10,
    descripcion: "Arroja residuos al objetivo. Puede llegar a envenenar."
  },
  m189: {
    nombre: "Bofetón Lodo (Mud slap)",
    tipo: "Tierra",
    categoria: "Especial",
    potencia: 20,
    precision: 100,
    pp: 10,
    descripcion: "Echa lodo en la cara para bajar la Precisión."
  },
  m190: {
    nombre: "Pulpocañón (Octazooka)",
    tipo: "Agua",
    categoria: "Especial",
    potencia: 65,
    precision: 85,
    pp: 10,
    descripcion: "Dispara tinta a la cara. Puede bajar la Precisión."
  },
  m191: {
    nombre: "Púas (Spikes)",
    tipo: "Tierra",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 20,
    descripcion: "Esparce púas alrededor del equipo rival que hieren  a los Pokémon rivales que entran en combate."
  },
  m192: {
    nombre: "Electrocañón (Zap cannon)",
    tipo: "Eléctrico",
    categoria: "Especial",
    potencia: 120,
    precision: 50,
    pp: 5,
    descripcion: "Dispara una descarga eléctrica que causa daño y  parálisis."
  },
  m193: {
    nombre: "Profecía (Foresight)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 40,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m194: {
    nombre: "Mismo Destino (Destiny bond)",
    tipo: "Fantasma",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 5,
    descripcion: "Si el usuario se debilita por un ataque rival antes de usar otro movimiento, el Pokémon rival se debilitará también. Puede fallar si se usa repetidamente."
  },
  m195: {
    nombre: "Canto Mortal (Perish song)",
    tipo: "Sonido",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 5,
    descripcion: "Si un Pokémon escucha este canto y no es cambiado por otro en tres turnos, acaba debilitándose."
  },
  m196: {
    nombre: "Viento Hielo (Icy wind)",
    tipo: "Hielo",
    categoria: "Especial",
    potencia: 55,
    precision: 95,
    pp: 15,
    descripcion: "Ataque con aire helado que baja la Velocidad de los  rivales."
  },
  m197: {
    nombre: "Detección (Detect)",
    tipo: "Lucha",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 5,
    descripcion: "Frena todos los ataques, pero puede fallar si se usa  repetidamente."
  },
  m198: {
    nombre: "Ataque Óseo (Bone rush)",
    tipo: "Tierra",
    categoria: "Físico",
    potencia: 25,
    precision: 90,
    pp: 10,
    descripcion: "Hueso en ristre, aporrea al objetivo de dos a cinco  veces."
  },
  m199: {
    nombre: "Fijar Blanco (Lock on)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 5,
    descripcion: "Fija el blanco para que el siguiente ataque no falle."
  },
  m200: {
    nombre: "Enfado (Outrage)",
    tipo: "Dragón",
    categoria: "Físico",
    potencia: 120,
    precision: 100,
    pp: 10,
    descripcion: "Ataca de dos a tres turnos y acaba confundiendo al  agresor."
  },
  m201: {
    nombre: "Tormenta Arena (Sandstorm)",
    tipo: "Roca",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "Tormenta de arena que dura cinco turnos y hiere a  todos, excepto a los de tipo Roca, Tierra y Acero, y aumenta la Defensa Especial de los de tipo Roca."
  },
  m202: {
    nombre: "Gigadrenado (Giga drain)",
    tipo: "Planta",
    categoria: "Especial",
    potencia: 75,
    precision: 100,
    pp: 10,
    descripcion: "Un ataque que absorbe nutrientes. Quien lo usa  recupera la mitad de los PS del daño que produce."
  },
  m203: {
    nombre: "Aguante (Endure)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "Resiste cualquier ataque y deja al menos 1 PS.  Puede fallar si se usa repetidamente."
  },
  m204: {
    nombre: "Encanto (Charm)",
    tipo: "Hada",
    categoria: "Estado",
    potencia: 0,
    precision: 100,
    pp: 20,
    descripcion: "Engatusa al objetivo y reduce mucho su Ataque."
  },
  m205: {
    nombre: "Rodar (Rollout)",
    tipo: "Roca",
    categoria: "Físico",
    potencia: 30,
    precision: 90,
    pp: 20,
    descripcion: "El atacante rueda contra el objetivo durante cinco  turnos, cada vez con mayor fuerza."
  },
  m206: {
    nombre: "Falso Tortazo (False swipe)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 40,
    precision: 100,
    pp: 40,
    descripcion: "Ataque moderado que no debilita al objetivo y le deja al menos 1 PS."
  },
  m207: {
    nombre: "Contoneo (Swagger)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 85,
    pp: 15,
    descripcion: "Provoca confusión en el objetivo, pero también sube  mucho su Ataque."
  },
  m208: {
    nombre: "Batido (Milk drink)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 5,
    descripcion: "Restaura la mitad de los PS máximos del usuario."
  },
  m209: {
    nombre: "Chispa (Spark)",
    tipo: "Eléctrico",
    categoria: "Físico",
    potencia: 65,
    precision: 100,
    pp: 20,
    descripcion: "Ataque eléctrico que puede llegar a paralizar."
  },
  m210: {
    nombre: "Corte Furia (Fury cutter)",
    tipo: "Bicho",
    categoria: "Físico",
    potencia: 40,
    precision: 95,
    pp: 20,
    descripcion: "Ataque con garras o guadaña que crece en intensidad si se usa repetidas veces."
  },
  m211: {
    nombre: "Ala de Acero (Steel wing)",
    tipo: "Acero",
    categoria: "Físico",
    potencia: 70,
    precision: 90,
    pp: 25,
    descripcion: "Alas macizas que golpean al objetivo y pueden subir  la Defensa del usuario."
  },
  m212: {
    nombre: "Mal de Ojo (Mean look)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 5,
    descripcion: "Mal de ojo que impide al objetivo huir del combate."
  },
  m213: {
    nombre: "Atracción (Attract)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 100,
    pp: 15,
    descripcion: "Si el objetivo es del sexo opuesto, se enamorará y  bajará la posibilidad de que ataque."
  },
  m214: {
    nombre: "Sonámbulo (Sleep talk)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "Mientras duerme, usa uno de sus movimientos elegido al azar."
  },
  m215: {
    nombre: "Campana Cura (Heal bell)",
    tipo: "Sonido",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 5,
    descripcion: "Tañido que cura los problemas de estado de todos los Pokémon del equipo."
  },
  m216: {
    nombre: "Retribución (Return)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 0,
    precision: 100,
    pp: 20,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m217: {
    nombre: "Presente (Present)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 0,
    precision: 90,
    pp: 15,
    descripcion: "Quien lo usa ataca al objetivo dándole un regalo con una bomba trampa. Sin embargo, a veces restaura sus PS."
  },
  m218: {
    nombre: "Frustración (Frustration)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 0,
    precision: 100,
    pp: 20,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m219: {
    nombre: "Velo Sagrado (Safeguard)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 25,
    descripcion: "Un escudo que protege de problemas de estado, como el sueño o la parálisis, durante cinco turnos."
  },
  m220: {
    nombre: "Divide Dolor (Pain split)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 20,
    descripcion: "Suma los PS del usuario a los del objetivo y los reparte a partes iguales."
  },
  m221: {
    nombre: "Fuego Sagrado (Sacred fire)",
    tipo: "Fuego",
    categoria: "Físico",
    potencia: 100,
    precision: 95,
    pp: 5,
    descripcion: "Fuego místico de gran intensidad que puede causar  quemaduras."
  },
  m222: {
    nombre: "Magnitud (Magnitude)",
    tipo: "Tierra",
    categoria: "Físico",
    potencia: 0,
    precision: 100,
    pp: 30,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m223: {
    nombre: "Puño Dinámico (Dynamic punch)",
    tipo: "Lucha",
    categoria: "Físico",
    potencia: 100,
    precision: 50,
    pp: 5,
    descripcion: "Puñetazo con toda la fuerza concentrada. Causa  confusión si atina."
  },
  m224: {
    nombre: "Megacuerno (Megahorn)",
    tipo: "Bicho",
    categoria: "Físico",
    potencia: 120,
    precision: 85,
    pp: 10,
    descripcion: "Violenta embestida con cuernos imponentes."
  },
  m225: {
    nombre: "Dragoaliento (Dragon breath)",
    tipo: "Dragón",
    categoria: "Especial",
    potencia: 60,
    precision: 100,
    pp: 20,
    descripcion: "Poderosa ráfaga de aliento que golpea al objetivo y  puede paralizarlo."
  },
  m226: {
    nombre: "Relevo (Baton pass)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 40,
    descripcion: "Cambia el puesto con otro miembro del equipo y le pasa los cambios de características."
  },
  m227: {
    nombre: "Otra Vez (Encore)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 100,
    pp: 5,
    descripcion: "El objetivo repite su último movimiento durante tres  turnos."
  },
  m228: {
    nombre: "Persecución (Pursuit)",
    tipo: "Siniestro",
    categoria: "Físico",
    potencia: 40,
    precision: 100,
    pp: 20,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m229: {
    nombre: "Giro Rápido (Rapid spin)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 50,
    precision: 100,
    pp: 40,
    descripcion: "Ataque giratorio que puede eliminar movimientos como Atadura, Constricción y Drenadoras. También aumenta la Velocidad del usuario."
  },
  m230: {
    nombre: "Dulce Aroma (Sweet scent)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 100,
    pp: 20,
    descripcion: "Un dulce aroma engatusa al objetivo, por lo que se reduce mucho su Evasión."
  },
  m231: {
    nombre: "Cola Férrea (Iron tail)",
    tipo: "Acero",
    categoria: "Físico",
    potencia: 100,
    precision: 75,
    pp: 15,
    descripcion: "Ataca con una cola férrea y puede bajar la Defensa  del objetivo."
  },
  m232: {
    nombre: "Garra Metal (Metal claw)",
    tipo: "Acero",
    categoria: "Físico",
    potencia: 50,
    precision: 95,
    pp: 35,
    descripcion: "Ataque con garras de acero que puede aumentar el  Ataque del usuario."
  },
  m233: {
    nombre: "Tiro Vital (Vital throw)",
    tipo: "Lucha",
    categoria: "Físico",
    potencia: 70,
    precision: 0,
    pp: 10,
    descripcion: "El usuario ataca el último, pero no falla."
  },
  m234: {
    nombre: "Sol Matinal (Morning sun)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 5,
    descripcion: "Restaura PS del usuario. La cantidad varía según  el tiempo que haga."
  },
  m235: {
    nombre: "Síntesis (Synthesis)",
    tipo: "Planta",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 5,
    descripcion: "Restaura PS del usuario. La cantidad varía según  el tiempo que haga."
  },
  m236: {
    nombre: "Luz Lunar (Moonlight)",
    tipo: "Hada",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 5,
    descripcion: "Restaura PS del usuario. La cantidad varía según  el tiempo que haga."
  },
  m237: {
    nombre: "Poder Oculto (Hidden power)",
    tipo: "Normal",
    categoria: "Especial",
    potencia: 60,
    precision: 100,
    pp: 15,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m238: {
    nombre: "Tajo Cruzado (Cross chop)",
    tipo: "Lucha",
    categoria: "Físico",
    potencia: 100,
    precision: 80,
    pp: 5,
    descripcion: "Corte doble que suele propinar un golpe crítico."
  },
  m239: {
    nombre: "Ciclón (Twister)",
    tipo: "Dragón",
    categoria: "Especial",
    potencia: 40,
    precision: 100,
    pp: 20,
    descripcion: "Crea un violento tornado para hacer trizas al objetivo. Puede amedrentarlo."
  },
  m240: {
    nombre: "Danza Lluvia (Rain dance)",
    tipo: "Agua",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 5,
    descripcion: "Genera una fuerte lluvia que refuerza los movimientos de tipo Agua durante cinco turnos y debilita los de tipo Fuego."
  },
  m241: {
    nombre: "Día Soleado (Sunny day)",
    tipo: "Fuego",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 5,
    descripcion: "Hace que se intensifique el efecto del sol durante cinco turnos, lo que potencia los movimientos de tipo Fuego y debilita los de tipo Agua."
  },
  m242: {
    nombre: "Triturar (Crunch)",
    tipo: "Siniestro",
    categoria: "Físico",
    potencia: 80,
    precision: 100,
    pp: 15,
    descripcion: "Tritura con afilados colmillos y puede bajar la Defensa del objetivo."
  },
  m243: {
    nombre: "Manto Espejo (Mirror coat)",
    tipo: "Psíquico",
    categoria: "Especial",
    potencia: 0,
    precision: 100,
    pp: 20,
    descripcion: "Responde a un ataque especial ocasionando el doble  del daño recibido."
  },
  m244: {
    nombre: "Más Psique (Psych up)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "Quien lo usa se sume en un trance y copia cualquier cambio que haya en las características de su objetivo."
  },
  m245: {
    nombre: "Veloc. Extrema (Extreme speed)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 80,
    precision: 100,
    pp: 5,
    descripcion: "Ataque de una velocidad extrema. Este movimiento tiene prioridad alta."
  },
  m246: {
    nombre: "Poder Pasado (Ancient power)",
    tipo: "Roca",
    categoria: "Especial",
    potencia: 60,
    precision: 100,
    pp: 5,
    descripcion: "Ataque prehistórico que puede subir todas las  características."
  },
  m247: {
    nombre: "Bola Sombra (Shadow ball)",
    tipo: "Fantasma",
    categoria: "Especial",
    potencia: 80,
    precision: 100,
    pp: 15,
    descripcion: "Lanza una bola oscura que puede bajar la Defensa  Especial del objetivo."
  },
  m248: {
    nombre: "Premonición (Future sight)",
    tipo: "Psíquico",
    categoria: "Especial",
    potencia: 120,
    precision: 100,
    pp: 10,
    descripcion: "Concentra energía psíquica para golpear al objetivo dos turnos después."
  },
  m249: {
    nombre: "Golpe Roca (Rock smash)",
    tipo: "Lucha",
    categoria: "Físico",
    potencia: 40,
    precision: 100,
    pp: 15,
    descripcion: "Ataque con los puños. Puede bajar la Defensa del objetivo."
  },
  m250: {
    nombre: "Torbellino (Whirlpool)",
    tipo: "Agua",
    categoria: "Especial",
    potencia: 35,
    precision: 85,
    pp: 15,
    descripcion: "Una tromba de agua atrapa al objetivo durante cuatro o cinco turnos."
  },
  m251: {
    nombre: "Paliza (Beat up)",
    tipo: "Siniestro",
    categoria: "Físico",
    potencia: 0,
    precision: 100,
    pp: 10,
    descripcion: "Ataque de todo el equipo Pokémon. Cuantos más haya, más veces se atacará."
  },
  m252: {
    nombre: "Sorpresa (Fake out)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 40,
    precision: 100,
    pp: 10,
    descripcion: "Amedrenta al objetivo con este movimiento de prioridad alta. Solo sirve en el primer turno."
  },
  m253: {
    nombre: "Alboroto (Uproar)",
    tipo: "Sonido",
    categoria: "Especial",
    potencia: 90,
    precision: 100,
    pp: 10,
    descripcion: "Ataca de forma alborotada durante tres turnos.  Mantiene despiertos a todos."
  },
  m254: {
    nombre: "Reserva (Stockpile)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 20,
    descripcion: "Acumula energía y sube la Defensa y la Defensa  Especial. Puede utilizarse hasta tres veces."
  },
  m255: {
    nombre: "Escupir (Spit up)",
    tipo: "Normal",
    categoria: "Especial",
    potencia: 0,
    precision: 100,
    pp: 10,
    descripcion: "Libera de una vez la energía acumulada con Reserva. La potencia del ataque será proporcional a la cantidad de energía acumulada."
  },
  m256: {
    nombre: "Tragar (Swallow)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "Absorbe la energía acumulada con Reserva para recobrar salud. Cuanta más se haya acumulado, mayor será el número de PS que se recuperen."
  },
  m257: {
    nombre: "Onda Ígnea (Heat wave)",
    tipo: "Fuego",
    categoria: "Especial",
    potencia: 95,
    precision: 90,
    pp: 10,
    descripcion: "Provoca un viento abrasador que puede quemar al  objetivo."
  },
  m258: {
    nombre: "Granizo (Hail)",
    tipo: "Hielo",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "Tormenta de granizo que dura cinco turnos. Hiere a todos los Pokémon excepto a los de tipo Hielo."
  },
  m259: {
    nombre: "Tormento (Torment)",
    tipo: "Siniestro",
    categoria: "Estado",
    potencia: 0,
    precision: 100,
    pp: 15,
    descripcion: "Atormenta y enfurece al objetivo, que no puede usar dos veces seguidas el mismo movimiento."
  },
  m260: {
    nombre: "Camelo (Flatter)",
    tipo: "Siniestro",
    categoria: "Estado",
    potencia: 0,
    precision: 100,
    pp: 15,
    descripcion: "Halaga al objetivo y lo confunde, pero también sube su Ataque Especial."
  },
  m261: {
    nombre: "Fuego Fatuo (Will o wisp)",
    tipo: "Fuego",
    categoria: "Estado",
    potencia: 0,
    precision: 85,
    pp: 15,
    descripcion: "Siniestra llama morada que produce quemaduras."
  },
  m262: {
    nombre: "Legado (Memento)",
    tipo: "Siniestro",
    categoria: "Estado",
    potencia: 0,
    precision: 100,
    pp: 10,
    descripcion: "El usuario se debilita, pero baja mucho tanto el  Ataque como el Ataque Especial del objetivo."
  },
  m263: {
    nombre: "Imagen (Facade)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 70,
    precision: 100,
    pp: 20,
    descripcion: "Si el usuario está quemado, paralizado o envenenado, ataca con el doble de potencia."
  },
  m264: {
    nombre: "Puño Certero (Focus punch)",
    tipo: "Lucha",
    categoria: "Físico",
    potencia: 150,
    precision: 100,
    pp: 20,
    descripcion: "Se concentra para dar un puñetazo. Falla si se sufre un golpe antes de su uso."
  },
  m265: {
    nombre: "Estímulo (Smelling salts)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 70,
    precision: 100,
    pp: 10,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m266: {
    nombre: "Señuelo (Follow me)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 20,
    descripcion: "Llama la atención para concentrar todos los ataques de todos los del equipo rival hacia sí mismo."
  },
  m267: {
    nombre: "Adaptación (Nature power)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 20,
    descripcion: "Usa el poder de la naturaleza para atacar. Su efecto varía según el entorno de combate."
  },
  m268: {
    nombre: "Carga (Charge)",
    tipo: "Eléctrico",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 20,
    descripcion: "Recarga energía para potenciar el siguiente movimiento de tipo Eléctrico. También sube la Defensa Especial."
  },
  m269: {
    nombre: "Mofa (Taunt)",
    tipo: "Siniestro",
    categoria: "Estado",
    potencia: 0,
    precision: 100,
    pp: 20,
    descripcion: "Enfurece al objetivo para que solo use movimientos de ataque durante tres turnos."
  },
  m270: {
    nombre: "Refuerzo (Helping hand)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 20,
    descripcion: "El usuario ayuda a un aliado reforzando la potencia de su ataque."
  },
  m271: {
    nombre: "Truco (Trick)",
    tipo: "Psíquico",
    categoria: "Estado",
    potencia: 0,
    precision: 100,
    pp: 10,
    descripcion: "Engaña al objetivo desprevenido e intercambia objetos."
  },
  m272: {
    nombre: "Imitación (Role play)",
    tipo: "Psíquico",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "Imita al objetivo por completo y copia su habilidad."
  },
  m273: {
    nombre: "Deseo (Wish)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "Restaura en el siguiente turno la mitad de los PS máximos del usuario o se los pasa al Pokémon que lo sustituye."
  },
  m274: {
    nombre: "Ayuda (Assist)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 20,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m275: {
    nombre: "Arraigo (Ingrain)",
    tipo: "Planta",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 20,
    descripcion: "Echa raíces para recuperar PS en cada turno, pero  impide el relevo."
  },
  m276: {
    nombre: "Fuerza Bruta (Superpower)",
    tipo: "Lucha",
    categoria: "Físico",
    potencia: 120,
    precision: 100,
    pp: 5,
    descripcion: "Ataque de gran potencia, pero que reduce el Ataque y la Defensa del agresor."
  },
  m277: {
    nombre: "Capa Mágica (Magic coat)",
    tipo: "Psíquico",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 15,
    descripcion: "Barrera capaz de devolver al agresor movimientos  como Drenadoras y otros que alteran el estado o  las características."
  },
  m278: {
    nombre: "Reciclaje (Recycle)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "Recicla y así recupera un objeto equipado de un solo uso que ya haya sido empleado durante el combate."
  },
  m279: {
    nombre: "Desquite (Revenge)",
    tipo: "Lucha",
    categoria: "Físico",
    potencia: 60,
    precision: 100,
    pp: 10,
    descripcion: "Ataque que produce el doble de daño si el usuario resulta herido en el mismo turno."
  },
  m280: {
    nombre: "Demolición (Brick break)",
    tipo: "Lucha",
    categoria: "Físico",
    potencia: 75,
    precision: 100,
    pp: 15,
    descripcion: "Potente ataque que también es capaz de destruir  barreras como Pantalla de Luz y Reflejo."
  },
  m281: {
    nombre: "Bostezo (Yawn)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "Gran bostezo que induce al sueño al objetivo en el siguiente turno."
  },
  m282: {
    nombre: "Desarme (Knock off)",
    tipo: "Siniestro",
    categoria: "Físico",
    potencia: 65,
    precision: 100,
    pp: 20,
    descripcion: "Impide al objetivo usar el objeto que lleva durante el combate. La potencia del movimiento se multiplica si el objetivo lleva un objeto."
  },
  m283: {
    nombre: "Esfuerzo (Endeavor)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 0,
    precision: 100,
    pp: 5,
    descripcion: "Reduce los PS del objetivo para que igualen a los del atacante."
  },
  m284: {
    nombre: "Estallido (Eruption)",
    tipo: "Fuego",
    categoria: "Especial",
    potencia: 150,
    precision: 100,
    pp: 5,
    descripcion: "Furia explosiva. Cuanto menor sea el número de PS del usuario, menos daño hará el ataque."
  },
  m285: {
    nombre: "Intercambio (Skill swap)",
    tipo: "Psíquico",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "Usa el poder psíquico para intercambiar habilidades con el objetivo."
  },
  m286: {
    nombre: "Sellar (Imprison)",
    tipo: "Psíquico",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "Impide a los contrincantes usar ataques conocidos por el usuario durante el combate."
  },
  m287: {
    nombre: "Alivio (Refresh)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 20,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m288: {
    nombre: "Rabia (Grudge)",
    tipo: "Fantasma",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 5,
    descripcion: "Si el usuario se debilita al recibir un ataque, todos los PP de este último ataque serán eliminados."
  },
  m289: {
    nombre: "Robo (Snatch)",
    tipo: "Siniestro",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m290: {
    nombre: "Daño Secreto (Secret power)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 70,
    precision: 100,
    pp: 20,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m291: {
    nombre: "Buceo (Dive)",
    tipo: "Agua",
    categoria: "Físico",
    potencia: 80,
    precision: 100,
    pp: 10,
    descripcion: "El usuario se sumerge en el primer turno y ataca en el segundo."
  },
  m292: {
    nombre: "Empujón (Arm thrust)",
    tipo: "Lucha",
    categoria: "Físico",
    potencia: 15,
    precision: 100,
    pp: 20,
    descripcion: "Fuertes empujones que golpean de dos a cinco veces seguidas."
  },
  m293: {
    nombre: "Camuflaje (Camouflage)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 20,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m294: {
    nombre: "Ráfaga (Tail glow)",
    tipo: "Bicho",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 20,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m295: {
    nombre: "Resplandor (Luster purge)",
    tipo: "Psíquico",
    categoria: "Especial",
    potencia: 95,
    precision: 100,
    pp: 5,
    descripcion: "Fogonazo de luz que puede bajar la Defensa Especial del objetivo."
  },
  m296: {
    nombre: "Bola Neblina (Mist ball)",
    tipo: "Psíquico",
    categoria: "Especial",
    potencia: 95,
    precision: 100,
    pp: 5,
    descripcion: "Banco de niebla que puede bajar el Ataque Especial del objetivo."
  },
  m297: {
    nombre: "Danza Pluma (Feather dance)",
    tipo: "Volador",
    categoria: "Estado",
    potencia: 0,
    precision: 100,
    pp: 15,
    descripcion: "Envuelve al objetivo con un manto de plumas para  reducir mucho su Ataque."
  },
  m298: {
    nombre: "Danza Caos (Teeter dance)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 100,
    pp: 20,
    descripcion: "Danza histérica que confunde a los Pokémon que están alrededor del usuario."
  },
  m299: {
    nombre: "Patada Ígnea (Blaze kick)",
    tipo: "Fuego",
    categoria: "Físico",
    potencia: 85,
    precision: 90,
    pp: 10,
    descripcion: "Patada que suele ser un golpe crítico y puede causar quemaduras."
  },
  m300: {
    nombre: "Chapoteo Lodo (Mud sport)",
    tipo: "Tierra",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 15,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m301: {
    nombre: "Bola Hielo (Ice ball)",
    tipo: "Hielo",
    categoria: "Físico",
    potencia: 30,
    precision: 90,
    pp: 20,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m302: {
    nombre: "Brazo Pincho (Needle arm)",
    tipo: "Planta",
    categoria: "Físico",
    potencia: 60,
    precision: 100,
    pp: 15,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m303: {
    nombre: "Relajo (Slack off)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 5,
    descripcion: "El usuario se relaja y restaura la mitad de sus PS  máximos."
  },
  m304: {
    nombre: "Vozarrón (Hyper voice)",
    tipo: "Sonido",
    categoria: "Especial",
    potencia: 90,
    precision: 100,
    pp: 10,
    descripcion: "Grito desgarrador que inflige daño al objetivo."
  },
  m305: {
    nombre: "Colmillo Veneno (Poison fang)",
    tipo: "Veneno",
    categoria: "Físico",
    potencia: 50,
    precision: 100,
    pp: 15,
    descripcion: "Colmillos tóxicos que pueden envenenar gravemente al objetivo."
  },
  m306: {
    nombre: "Garra Brutal (Crush claw)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 75,
    precision: 95,
    pp: 10,
    descripcion: "Hace trizas al objetivo con garras afiladas y puede bajar su Defensa."
  },
  m307: {
    nombre: "Anillo Ígneo (Blast burn)",
    tipo: "Fuego",
    categoria: "Especial",
    potencia: 150,
    precision: 90,
    pp: 5,
    descripcion: "Explosión de fuego. El atacante debe descansar el  siguiente turno."
  },
  m308: {
    nombre: "Hidrocañón (Hydro cannon)",
    tipo: "Agua",
    categoria: "Especial",
    potencia: 150,
    precision: 90,
    pp: 5,
    descripcion: "Disparo de agua. El atacante debe descansar el  siguiente turno."
  },
  m309: {
    nombre: "Puño Meteoro (Meteor mash)",
    tipo: "Acero",
    categoria: "Físico",
    potencia: 90,
    precision: 90,
    pp: 10,
    descripcion: "Puñetazo que impacta como un meteorito y puede subir el Ataque del agresor."
  },
  m310: {
    nombre: "Impresionar (Astonish)",
    tipo: "Fantasma",
    categoria: "Físico",
    potencia: 30,
    precision: 100,
    pp: 15,
    descripcion: "Lanza un grito tan tremendo que impresiona y puede amedrentar al objetivo."
  },
  m311: {
    nombre: "Meteorobola (Weather ball)",
    tipo: "Normal",
    categoria: "Especial",
    potencia: 50,
    precision: 100,
    pp: 10,
    descripcion: "El tipo y fuerza del ataque varían según el tiempo que haga."
  },
  m312: {
    nombre: "Aromaterapia (Aromatherapy)",
    tipo: "Planta",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 5,
    descripcion: "Cura todos los problemas de estado del equipo con un suave aroma."
  },
  m313: {
    nombre: "Llanto Falso (Fake tears)",
    tipo: "Siniestro",
    categoria: "Estado",
    potencia: 0,
    precision: 100,
    pp: 20,
    descripcion: "Lágrimas de cocodrilo que bajan mucho la Defensa Especial del objetivo."
  },
  m314: {
    nombre: "Aire Afilado (Air cutter)",
    tipo: "Volador",
    categoria: "Especial",
    potencia: 60,
    precision: 95,
    pp: 25,
    descripcion: "Viento cortante que azota. Suele ser un golpe crítico."
  },
  m315: {
    nombre: "Sofoco (Overheat)",
    tipo: "Fuego",
    categoria: "Especial",
    potencia: 130,
    precision: 90,
    pp: 5,
    descripcion: "Ataque en toda regla que baja mucho el Ataque  Especial de quien lo usa."
  },
  m316: {
    nombre: "Rastreo (Odor sleuth)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 40,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m317: {
    nombre: "Tumba Rocas (Rock tomb)",
    tipo: "Roca",
    categoria: "Físico",
    potencia: 60,
    precision: 95,
    pp: 15,
    descripcion: "Tira rocas que detienen al objetivo y bajan su Velocidad."
  },
  m318: {
    nombre: "Viento Plata (Silver wind)",
    tipo: "Bicho",
    categoria: "Especial",
    potencia: 60,
    precision: 100,
    pp: 5,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m319: {
    nombre: "Eco Metálico (Metal sound)",
    tipo: "Sonido",
    categoria: "Estado",
    potencia: 0,
    precision: 85,
    pp: 40,
    descripcion: "Horrible chirrido metálico que baja mucho la Defensa Especial del objetivo."
  },
  m320: {
    nombre: "Silbato (Grass whistle)",
    tipo: "Sonido",
    categoria: "Estado",
    potencia: 0,
    precision: 55,
    pp: 15,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m321: {
    nombre: "Cosquillas (Tickle)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 100,
    pp: 20,
    descripcion: "Hace reír al objetivo para bajar su Ataque y Defensa."
  },
  m322: {
    nombre: "Masa Cósmica (Cosmic power)",
    tipo: "Psíquico",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 20,
    descripcion: "Sube la Defensa y la Defensa Especial propias con  energía mística."
  },
  m323: {
    nombre: "Salpicar (Water spout)",
    tipo: "Agua",
    categoria: "Especial",
    potencia: 150,
    precision: 100,
    pp: 5,
    descripcion: "Chorro de agua. Cuantos menos PS tenga el usuario, menos dañino será."
  },
  m324: {
    nombre: "Doble Rayo (Signal beam)",
    tipo: "Bicho",
    categoria: "Especial",
    potencia: 75,
    precision: 100,
    pp: 15,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m325: {
    nombre: "Puño Sombra (Shadow punch)",
    tipo: "Fantasma",
    categoria: "Físico",
    potencia: 60,
    precision: 0,
    pp: 20,
    descripcion: "Puñetazo ineludible procedente de las sombras."
  },
  m326: {
    nombre: "Paranormal (Extrasensory)",
    tipo: "Psíquico",
    categoria: "Especial",
    potencia: 80,
    precision: 100,
    pp: 20,
    descripcion: "Emite una energía muy extraña que puede amedrentar al objetivo."
  },
  m327: {
    nombre: "Gancho Alto (Sky uppercut)",
    tipo: "Lucha",
    categoria: "Físico",
    potencia: 85,
    precision: 90,
    pp: 15,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m328: {
    nombre: "Bucle Arena (Sand tomb)",
    tipo: "Tierra",
    categoria: "Físico",
    potencia: 35,
    precision: 85,
    pp: 15,
    descripcion: "Enreda al objetivo en un remolino de arena de cuatro a cinco turnos."
  },
  m329: {
    nombre: "Frío Polar (Sheer cold)",
    tipo: "Hielo",
    categoria: "Especial",
    potencia: 0,
    precision: 30,
    pp: 5,
    descripcion: "Debilita al objetivo de un solo golpe. Si lo usa un Pokémon que no sea de tipo Hielo, es difícil que acierte."
  },
  m330: {
    nombre: "Agua Lodosa (Muddy water)",
    tipo: "Agua",
    categoria: "Especial",
    potencia: 90,
    precision: 85,
    pp: 10,
    descripcion: "Ataque con agua lodosa que puede bajar la Precisión del equipo rival."
  },
  m331: {
    nombre: "Semilladora (Bullet seed)",
    tipo: "Planta",
    categoria: "Físico",
    potencia: 25,
    precision: 100,
    pp: 30,
    descripcion: "Dispara rápido de dos a cinco ráfagas de semillas de manera consecutiva."
  },
  m332: {
    nombre: "Golpe Aéreo (Aerial ace)",
    tipo: "Volador",
    categoria: "Físico",
    potencia: 60,
    precision: 0,
    pp: 20,
    descripcion: "El usuario lanza un ataque muy rápido e ineludible."
  },
  m333: {
    nombre: "Carámbano (Icicle spear)",
    tipo: "Hielo",
    categoria: "Físico",
    potencia: 25,
    precision: 100,
    pp: 30,
    descripcion: "Ataca lanzando de dos a cinco ráfagas consecutivas de carámbanos."
  },
  m334: {
    nombre: "Defensa Férrea (Iron defense)",
    tipo: "Acero",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 15,
    descripcion: "Fortalece el cuerpo como si fuera de hierro y sube  mucho la Defensa."
  },
  m335: {
    nombre: "Bloqueo (Block)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 5,
    descripcion: "Le corta el paso al objetivo para que no pueda escapar."
  },
  m336: {
    nombre: "Aullido (Howl)",
    tipo: "Sonido",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 40,
    descripcion: "Aullido que sube el ánimo y aumenta el Ataque del equipo."
  },
  m337: {
    nombre: "Garra Dragón (Dragon claw)",
    tipo: "Dragón",
    categoria: "Físico",
    potencia: 80,
    precision: 100,
    pp: 15,
    descripcion: "Araña al objetivo con garras afiladas."
  },
  m338: {
    nombre: "Planta Feroz (Frenzy plant)",
    tipo: "Planta",
    categoria: "Especial",
    potencia: 150,
    precision: 90,
    pp: 5,
    descripcion: "Golpea con una enorme planta. Quien lo usa no puede moverse en el siguiente turno."
  },
  m339: {
    nombre: "Corpulencia (Bulk up)",
    tipo: "Lucha",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 20,
    descripcion: "Robustece el cuerpo para subir el Ataque y la Defensa."
  },
  m340: {
    nombre: "Bote (Bounce)",
    tipo: "Volador",
    categoria: "Físico",
    potencia: 85,
    precision: 85,
    pp: 5,
    descripcion: "El usuario bota en el primer turno y golpea al objetivo en el segundo y puede llegar a paralizarlo."
  },
  m341: {
    nombre: "Disparo Lodo (Mud shot)",
    tipo: "Tierra",
    categoria: "Especial",
    potencia: 55,
    precision: 95,
    pp: 15,
    descripcion: "El usuario lanza lodo al objetivo y reduce su Velocidad."
  },
  m342: {
    nombre: "Cola Veneno (Poison tail)",
    tipo: "Veneno",
    categoria: "Físico",
    potencia: 50,
    precision: 100,
    pp: 25,
    descripcion: "Puede envenenar y dar un golpe crítico."
  },
  m343: {
    nombre: "Antojo (Covet)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 60,
    precision: 100,
    pp: 25,
    descripcion: "Se acerca con ternura al objetivo, pero le ataca y le roba el objeto que lleve."
  },
  m344: {
    nombre: "Placaje Eléc (Volt tackle)",
    tipo: "Eléctrico",
    categoria: "Físico",
    potencia: 120,
    precision: 100,
    pp: 15,
    descripcion: "Quien lo usa electrifica su cuerpo para luego atacar.  Se hiere mucho a sí mismo, pero puede paralizar al  objetivo."
  },
  m345: {
    nombre: "Hoja Mágica (Magical leaf)",
    tipo: "Planta",
    categoria: "Especial",
    potencia: 60,
    precision: 0,
    pp: 20,
    descripcion: "Esparce extrañas hojas que persiguen al objetivo.  No se puede esquivar."
  },
  m346: {
    nombre: "Hidrochorro (Water sport)",
    tipo: "Agua",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 15,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m347: {
    nombre: "Paz Mental (Calm mind)",
    tipo: "Psíquico",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 20,
    descripcion: "Aumenta la concentración y calma el espíritu para  subir el Ataque Especial y la Defensa Especial."
  },
  m348: {
    nombre: "Hoja Aguda (Leaf blade)",
    tipo: "Planta",
    categoria: "Físico",
    potencia: 90,
    precision: 100,
    pp: 15,
    descripcion: "Acuchilla con una hoja fina. Suele dar un golpe crítico."
  },
  m349: {
    nombre: "Danza Dragón (Dragon dance)",
    tipo: "Dragón",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 20,
    descripcion: "Danza mística que sube el Ataque y la Velocidad."
  },
  m350: {
    nombre: "Pedrada (Rock blast)",
    tipo: "Roca",
    categoria: "Físico",
    potencia: 25,
    precision: 90,
    pp: 10,
    descripcion: "Lanza pedruscos al objetivo de dos a cinco veces  consecutivas."
  },
  m351: {
    nombre: "Onda Voltio (Shock wave)",
    tipo: "Eléctrico",
    categoria: "Especial",
    potencia: 60,
    precision: 0,
    pp: 20,
    descripcion: "Ataque eléctrico muy rápido e ineludible."
  },
  m352: {
    nombre: "Hidropulso (Water pulse)",
    tipo: "Agua",
    categoria: "Especial",
    potencia: 60,
    precision: 100,
    pp: 20,
    descripcion: "Ataca con un potente chorro de agua. Puede confundir al objetivo."
  },
  m353: {
    nombre: "Deseo Oculto (Doom desire)",
    tipo: "Acero",
    categoria: "Especial",
    potencia: 140,
    precision: 100,
    pp: 5,
    descripcion: "Concentra un haz de luz y ataca dos turnos después."
  },
  m354: {
    nombre: "Psicoataque (Psycho boost)",
    tipo: "Psíquico",
    categoria: "Especial",
    potencia: 140,
    precision: 90,
    pp: 5,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m355: {
    nombre: "Respiro (Roost)",
    tipo: "Volador",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 5,
    descripcion: "Aterriza sobre la superficie para descansar. Recupera hasta la mitad del total de sus PS."
  },
  m356: {
    nombre: "Gravedad (Gravity)",
    tipo: "Psíquico",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 5,
    descripcion: "Durante cinco turnos, se anulan los movimientos que alzan el vuelo y los Pokémon de tipo Volador o que levitan son vulnerables a movimientos de tipo Tierra."
  },
  m357: {
    nombre: "Gran Ojo (Miracle eye)",
    tipo: "Psíquico",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 40,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m358: {
    nombre: "Espabila (Wake up slap)",
    tipo: "Lucha",
    categoria: "Físico",
    potencia: 70,
    precision: 100,
    pp: 10,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m359: {
    nombre: "Machada (Hammer arm)",
    tipo: "Lucha",
    categoria: "Físico",
    potencia: 100,
    precision: 90,
    pp: 10,
    descripcion: "Gira con fuerza el puño y da un gran golpe. No obstante, baja la Velocidad."
  },
  m360: {
    nombre: "Giro Bola (Gyro ball)",
    tipo: "Acero",
    categoria: "Físico",
    potencia: 0,
    precision: 100,
    pp: 5,
    descripcion: "Embiste al objetivo con un potente ataque giratorio.  Cuanto más lento es el usuario, más daño causa."
  },
  m361: {
    nombre: "Deseo Cura (Healing wish)",
    tipo: "Psíquico",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "El Pokémon cae debilitado, pero su sustituto recupera su estado y los PS."
  },
  m362: {
    nombre: "Salmuera (Brine)",
    tipo: "Agua",
    categoria: "Especial",
    potencia: 65,
    precision: 100,
    pp: 10,
    descripcion: "Si al objetivo le queda la mitad o menos de sus PS, el ataque será el doble de fuerte."
  },
  m363: {
    nombre: "Don Natural (Natural gift)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 0,
    precision: 100,
    pp: 15,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m364: {
    nombre: "Amago (Feint)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 30,
    precision: 100,
    pp: 10,
    descripcion: "Permite golpear a objetivos que han utilizado movimientos como Protección o Detección y anula sus efectos."
  },
  m365: {
    nombre: "Picoteo (Pluck)",
    tipo: "Volador",
    categoria: "Físico",
    potencia: 60,
    precision: 100,
    pp: 20,
    descripcion: "Picotea al objetivo. Si este sostiene una baya, la picotea también y obtiene sus efectos."
  },
  m366: {
    nombre: "Viento Afín (Tailwind)",
    tipo: "Volador",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 15,
    descripcion: "Crea un fuerte remolino que aumenta la Velocidad de los Pokémon de tu equipo durante cuatro turnos."
  },
  m367: {
    nombre: "Acupresión (Acupressure)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 30,
    descripcion: "Aplica presión en puntos clave del cuerpo para potenciar mucho una de sus características."
  },
  m368: {
    nombre: "Represión Metal (Metal burst)",
    tipo: "Acero",
    categoria: "Físico",
    potencia: 0,
    precision: 100,
    pp: 10,
    descripcion: "Devuelve al rival el último ataque recibido, pero con  mucha más fuerza."
  },
  m369: {
    nombre: "Ida y Vuelta (U turn)",
    tipo: "Bicho",
    categoria: "Físico",
    potencia: 70,
    precision: 100,
    pp: 20,
    descripcion: "Tras atacar, el usuario vuelve a toda prisa para dar paso a otro Pokémon del equipo."
  },
  m370: {
    nombre: "A Bocajarro (Close combat)",
    tipo: "Lucha",
    categoria: "Físico",
    potencia: 120,
    precision: 100,
    pp: 5,
    descripcion: "Lucha abiertamente contra el objetivo sin protegerse. También reduce la Defensa y la Defensa Especial del usuario."
  },
  m371: {
    nombre: "Vendetta (Payback)",
    tipo: "Siniestro",
    categoria: "Físico",
    potencia: 50,
    precision: 100,
    pp: 10,
    descripcion: "El usuario contraataca con el doble de fuerza si el  objetivo usa un movimiento antes."
  },
  m372: {
    nombre: "Buena Baza (Assurance)",
    tipo: "Siniestro",
    categoria: "Físico",
    potencia: 60,
    precision: 100,
    pp: 10,
    descripcion: "Si el objetivo ya ha sufrido daño en ese turno, la fuerza del ataque se duplica."
  },
  m373: {
    nombre: "Embargo (Embargo)",
    tipo: "Siniestro",
    categoria: "Estado",
    potencia: 0,
    precision: 100,
    pp: 15,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m374: {
    nombre: "Lanzamiento (Fling)",
    tipo: "Siniestro",
    categoria: "Físico",
    potencia: 0,
    precision: 100,
    pp: 10,
    descripcion: "El usuario lanza contra el objetivo el objeto que lleva. La fuerza del ataque y su efecto varían según el objeto."
  },
  m375: {
    nombre: "Psicocambio (Psycho shift)",
    tipo: "Psíquico",
    categoria: "Estado",
    potencia: 0,
    precision: 100,
    pp: 10,
    descripcion: "Usa su poder mental para transferir al objetivo sus  problemas de estado."
  },
  m376: {
    nombre: "As Oculto (Trump card)",
    tipo: "Normal",
    categoria: "Especial",
    potencia: 0,
    precision: 0,
    pp: 5,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m377: {
    nombre: "Anticura (Heal block)",
    tipo: "Psíquico",
    categoria: "Estado",
    potencia: 0,
    precision: 100,
    pp: 15,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m378: {
    nombre: "Estrujón (Wring out)",
    tipo: "Normal",
    categoria: "Especial",
    potencia: 0,
    precision: 100,
    pp: 5,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m379: {
    nombre: "Truco Fuerza (Power trick)",
    tipo: "Psíquico",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "Usa sus poderes mentales para intercambiar sus  características de Ataque y Defensa."
  },
  m380: {
    nombre: "Bilis (Gastro acid)",
    tipo: "Veneno",
    categoria: "Estado",
    potencia: 0,
    precision: 100,
    pp: 10,
    descripcion: "El usuario arroja sus jugos biliares al objetivo, lo que anula el efecto de la habilidad en uso."
  },
  m381: {
    nombre: "Conjuro (Lucky chant)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 30,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m382: {
    nombre: "Yo Primero (Me first)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 20,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m383: {
    nombre: "Copión (Copycat)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 20,
    descripcion: "Imita el movimiento usado justo antes. El movimiento falla si no se ha usado aún ninguno."
  },
  m384: {
    nombre: "Cambiafuerza (Power swap)",
    tipo: "Psíquico",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "El usuario emplea su poder mental para intercambiar los cambios en el Ataque y Ataque Especial con el objetivo."
  },
  m385: {
    nombre: "Cambiadefensa (Guard swap)",
    tipo: "Psíquico",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "El usuario emplea su poder mental para intercambiar los cambios en la Defensa y Defensa Especial con el objetivo."
  },
  m386: {
    nombre: "Castigo (Punishment)",
    tipo: "Siniestro",
    categoria: "Físico",
    potencia: 0,
    precision: 100,
    pp: 5,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m387: {
    nombre: "Última Baza (Last resort)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 140,
    precision: 100,
    pp: 5,
    descripcion: "Este movimiento solo puede utilizarse tras haber usado al menos una vez todos los demás conocidos por el Pokémon."
  },
  m388: {
    nombre: "Abatidoras (Worry seed)",
    tipo: "Planta",
    categoria: "Estado",
    potencia: 0,
    precision: 100,
    pp: 10,
    descripcion: "Planta una semilla en el objetivo que le causa pesar. Sustituye la habilidad del objetivo por Insomnio y le impide dormirse."
  },
  m389: {
    nombre: "Golpe Bajo (Sucker punch)",
    tipo: "Siniestro",
    categoria: "Físico",
    potencia: 70,
    precision: 100,
    pp: 5,
    descripcion: "Permite atacar con prioridad. Falla si el objetivo no está preparando ningún ataque."
  },
  m390: {
    nombre: "Púas Tóxicas (Toxic spikes)",
    tipo: "Veneno",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 20,
    descripcion: "Lanza una trampa de púas tóxicas a los pies del objetivo. El veneno afecta a los Pokémon oponentes que entran en combate."
  },
  m391: {
    nombre: "Cambia Almas (Heart swap)",
    tipo: "Psíquico",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m392: {
    nombre: "Acua Aro (Aqua ring)",
    tipo: "Agua",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 20,
    descripcion: "Un manto de agua cubre al Pokémon que lo usa.  Recupera algunos PS en cada turno."
  },
  m393: {
    nombre: "Levitón (Magnet rise)",
    tipo: "Eléctrico",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "Levita gracias a un campo magnético generado por  electricidad durante cinco turnos."
  },
  m394: {
    nombre: "Envite Ígneo (Flare blitz)",
    tipo: "Fuego",
    categoria: "Físico",
    potencia: 120,
    precision: 100,
    pp: 15,
    descripcion: "El Pokémon se cubre de llamas y carga contra el objetivo, aunque él también recibe daño. Puede quemar."
  },
  m395: {
    nombre: "Palmeo (Force palm)",
    tipo: "Lucha",
    categoria: "Físico",
    potencia: 60,
    precision: 100,
    pp: 10,
    descripcion: "Ataca al objetivo con una onda de choque y puede  llegar a paralizarlo."
  },
  m396: {
    nombre: "Esfera Aural (Aura sphere)",
    tipo: "Lucha",
    categoria: "Especial",
    potencia: 80,
    precision: 0,
    pp: 20,
    descripcion: "Libera, desde su interior, una inmensa descarga de aura. Es infalible."
  },
  m397: {
    nombre: "Pulimento (Rock polish)",
    tipo: "Roca",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 20,
    descripcion: "Reduce la resistencia puliendo su cuerpo. Aumenta mucho la Velocidad."
  },
  m398: {
    nombre: "Puya Nociva (Poison jab)",
    tipo: "Veneno",
    categoria: "Físico",
    potencia: 80,
    precision: 100,
    pp: 20,
    descripcion: "Pincha al objetivo con un tentáculo o brazo envenenado. Puede llegar a envenenar al objetivo."
  },
  m399: {
    nombre: "Pulso Umbrío (Dark pulse)",
    tipo: "Siniestro",
    categoria: "Especial",
    potencia: 80,
    precision: 100,
    pp: 15,
    descripcion: "Libera una horrible aura llena de malos pensamientos que puede amedrentar al objetivo."
  },
  m400: {
    nombre: "Tajo Umbrío (Night slash)",
    tipo: "Siniestro",
    categoria: "Físico",
    potencia: 70,
    precision: 100,
    pp: 15,
    descripcion: "Ataca al objetivo a la primera oportunidad. Suele ser crítico."
  },
  m401: {
    nombre: "Acua Cola (Aqua tail)",
    tipo: "Agua",
    categoria: "Físico",
    potencia: 90,
    precision: 90,
    pp: 10,
    descripcion: "Ataca agitando la cola como si fuera una ola rabiosa en una tormenta devastadora."
  },
  m402: {
    nombre: "Bomba Germen (Seed bomb)",
    tipo: "Planta",
    categoria: "Físico",
    potencia: 80,
    precision: 100,
    pp: 15,
    descripcion: "Lanza al objetivo una descarga de semillas explosivas desde arriba."
  },
  m403: {
    nombre: "Tajo Aéreo (Air slash)",
    tipo: "Volador",
    categoria: "Especial",
    potencia: 75,
    precision: 95,
    pp: 15,
    descripcion: "Ataca con un viento afilado que incluso corta el aire. También puede amedrentar al objetivo."
  },
  m404: {
    nombre: "Tijera X (X scissor)",
    tipo: "Bicho",
    categoria: "Físico",
    potencia: 80,
    precision: 100,
    pp: 15,
    descripcion: "Cruza las guadañas o las garras para atacar al objetivo como si fueran unas tijeras."
  },
  m405: {
    nombre: "Zumbido (Bug buzz)",
    tipo: "Sonido",
    categoria: "Especial",
    potencia: 90,
    precision: 100,
    pp: 10,
    descripcion: "El usuario crea una onda sónica dañina moviendo su cuerpo que también puede disminuir la Defensa Especial del objetivo."
  },
  m406: {
    nombre: "Pulso Dragón (Dragon pulse)",
    tipo: "Dragón",
    categoria: "Especial",
    potencia: 85,
    precision: 100,
    pp: 10,
    descripcion: "Abre mucho la boca y libera una onda de choque que ataca al objetivo."
  },
  m407: {
    nombre: "Carga Dragón (Dragon rush)",
    tipo: "Dragón",
    categoria: "Físico",
    potencia: 100,
    precision: 75,
    pp: 10,
    descripcion: "Ataca de forma brutal mientras intimida al objetivo. También puede amedrentarlo."
  },
  m408: {
    nombre: "Joya de Luz (Power gem)",
    tipo: "Roca",
    categoria: "Especial",
    potencia: 80,
    precision: 100,
    pp: 20,
    descripcion: "Ataca con un rayo de luz que centellea como si lo  formaran miles de joyas."
  },
  m409: {
    nombre: "Puño Drenaje (Drain punch)",
    tipo: "Lucha",
    categoria: "Físico",
    potencia: 75,
    precision: 100,
    pp: 10,
    descripcion: "Un golpe que drena energía. El Pokémon recupera la mitad de los PS arrebatados al objetivo."
  },
  m410: {
    nombre: "Onda Vacío (Vacuum wave)",
    tipo: "Lucha",
    categoria: "Especial",
    potencia: 40,
    precision: 100,
    pp: 30,
    descripcion: "Gira los puños y libera una onda de vacío contra el objetivo. Este movimiento tiene prioridad alta."
  },
  m411: {
    nombre: "Onda Certera (Focus blast)",
    tipo: "Lucha",
    categoria: "Especial",
    potencia: 120,
    precision: 70,
    pp: 5,
    descripcion: "Agudiza la concentración mental y libera su poder.  Puede disminuir la Defensa Especial del objetivo."
  },
  m412: {
    nombre: "Energibola (Energy ball)",
    tipo: "Planta",
    categoria: "Especial",
    potencia: 90,
    precision: 100,
    pp: 10,
    descripcion: "Aúna fuerzas de la naturaleza y libera su ataque.  Puede disminuir la Defensa Especial del objetivo."
  },
  m413: {
    nombre: "Pájaro Osado (Brave bird)",
    tipo: "Volador",
    categoria: "Físico",
    potencia: 120,
    precision: 100,
    pp: 15,
    descripcion: "Pliega sus alas y ataca con un vuelo rasante. El  Pokémon que lo usa también resulta seriamente  dañado."
  },
  m414: {
    nombre: "Tierra Viva (Earth power)",
    tipo: "Tierra",
    categoria: "Especial",
    potencia: 90,
    precision: 100,
    pp: 10,
    descripcion: "La tierra a los pies del objetivo erupciona violentamente. Puede disminuir la Defensa Especial  del objetivo."
  },
  m415: {
    nombre: "Trapicheo (Switcheroo)",
    tipo: "Siniestro",
    categoria: "Estado",
    potencia: 0,
    precision: 100,
    pp: 10,
    descripcion: "Intercambia con el objetivo los objetos que llevan tan rápido que es imposible verlo a simple vista."
  },
  m416: {
    nombre: "Gigaimpacto (Giga impact)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 150,
    precision: 90,
    pp: 5,
    descripcion: "El usuario carga contra el objetivo con toda la fuerza que tiene y descansa durante el siguiente turno."
  },
  m417: {
    nombre: "Maquinación (Nasty plot)",
    tipo: "Siniestro",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 20,
    descripcion: "Estimula su cerebro pensando en cosas malas. Aumenta mucho el Ataque Especial."
  },
  m418: {
    nombre: "Puño Bala (Bullet punch)",
    tipo: "Acero",
    categoria: "Físico",
    potencia: 40,
    precision: 100,
    pp: 30,
    descripcion: "Ataca con fuertes puñetazos tan rápidos como proyectiles. Este movimiento tiene prioridad alta."
  },
  m419: {
    nombre: "Alud (Avalanche)",
    tipo: "Hielo",
    categoria: "Físico",
    potencia: 60,
    precision: 100,
    pp: 10,
    descripcion: "Este ataque inflige el doble de daño a un objetivo que haya golpeado al usuario en ese mismo turno."
  },
  m420: {
    nombre: "Canto Helado (Ice shard)",
    tipo: "Sonido",
    categoria: "Físico",
    potencia: 40,
    precision: 100,
    pp: 30,
    descripcion: "Crea bolas de hielo y las lanza a gran velocidad.  Este movimiento tiene prioridad alta."
  },
  m421: {
    nombre: "Garra Umbría (Shadow claw)",
    tipo: "Fantasma",
    categoria: "Físico",
    potencia: 70,
    precision: 100,
    pp: 15,
    descripcion: "Ataca con una garra afilada hecha de sombras. Suele ser crítico."
  },
  m422: {
    nombre: "Colmillo Rayo (Thunder fang)",
    tipo: "Eléctrico",
    categoria: "Físico",
    potencia: 65,
    precision: 95,
    pp: 15,
    descripcion: "El usuario muerde al objetivo con colmillos electrificados y puede hacer que se amedrente o se paralice."
  },
  m423: {
    nombre: "Colmillo Hielo (Ice fang)",
    tipo: "Hielo",
    categoria: "Físico",
    potencia: 65,
    precision: 95,
    pp: 15,
    descripcion: "El usuario muerde al objetivo con colmillos helados y puede hacer que se amedrente o se congele."
  },
  m424: {
    nombre: "Colmillo Ígneo (Fire fang)",
    tipo: "Fuego",
    categoria: "Físico",
    potencia: 65,
    precision: 95,
    pp: 15,
    descripcion: "El usuario muerde al objetivo con colmillos en llamas y puede hacer que se amedrente o sufra quemaduras."
  },
  m425: {
    nombre: "Sombra Vil (Shadow sneak)",
    tipo: "Fantasma",
    categoria: "Físico",
    potencia: 40,
    precision: 100,
    pp: 30,
    descripcion: "Extiende su sombra y ataca al objetivo por la espalda. Este movimiento tiene prioridad alta."
  },
  m426: {
    nombre: "Bomba Fango (Mud bomb)",
    tipo: "Tierra",
    categoria: "Especial",
    potencia: 65,
    precision: 85,
    pp: 10,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m427: {
    nombre: "Psicocorte (Psycho cut)",
    tipo: "Psíquico",
    categoria: "Físico",
    potencia: 70,
    precision: 100,
    pp: 20,
    descripcion: "Ataca al objetivo con cuchillas formadas por energía  psíquica. Suele ser crítico."
  },
  m428: {
    nombre: "Cabezazo Zen (Zen headbutt)",
    tipo: "Psíquico",
    categoria: "Físico",
    potencia: 80,
    precision: 90,
    pp: 15,
    descripcion: "Concentra su energía psíquica en la cabeza para golpear. Puede hacer que el objetivo se amedrente."
  },
  m429: {
    nombre: "Disparo Espejo (Mirror shot)",
    tipo: "Acero",
    categoria: "Especial",
    potencia: 65,
    precision: 85,
    pp: 10,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m430: {
    nombre: "Foco Resplandor (Flash cannon)",
    tipo: "Acero",
    categoria: "Especial",
    potencia: 80,
    precision: 100,
    pp: 10,
    descripcion: "El usuario concentra toda la luz del cuerpo y la libera. Puede bajar la Defensa Especial del objetivo."
  },
  m431: {
    nombre: "Treparrocas (Rock climb)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 90,
    precision: 85,
    pp: 20,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m432: {
    nombre: "Despejar (Defog)",
    tipo: "Volador",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 15,
    descripcion: "Potente viento que barre el reflejo o la pantalla de luz creada por el objetivo. También puede reducir su Evasión."
  },
  m433: {
    nombre: "Espacio Raro (Trick room)",
    tipo: "Psíquico",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 5,
    descripcion: "Crea un espacio extraño en el que los Pokémon lentos se mueven primero durante cinco turnos."
  },
  m434: {
    nombre: "Cometa Draco (Draco meteor)",
    tipo: "Dragón",
    categoria: "Especial",
    potencia: 130,
    precision: 90,
    pp: 5,
    descripcion: "Hace que grandes cometas caigan del cielo sobre el objetivo. Baja mucho el Ataque Especial del que lo usa."
  },
  m435: {
    nombre: "Chispazo (Discharge)",
    tipo: "Eléctrico",
    categoria: "Especial",
    potencia: 80,
    precision: 100,
    pp: 15,
    descripcion: "Una deslumbradora onda eléctrica afecta a los Pokémon que hay combatiendo alrededor. Puede paralizar."
  },
  m436: {
    nombre: "Humareda (Lava plume)",
    tipo: "Fuego",
    categoria: "Especial",
    potencia: 80,
    precision: 100,
    pp: 15,
    descripcion: "Un infierno de llamas daña a los Pokémon adyacentes en combate. Puede quemar."
  },
  m437: {
    nombre: "Lluevehojas (Leaf storm)",
    tipo: "Planta",
    categoria: "Especial",
    potencia: 130,
    precision: 90,
    pp: 5,
    descripcion: "Envuelve al objetivo con una lluvia de hojas afiladas, pero reduce mucho su Ataque Especial."
  },
  m438: {
    nombre: "Latigazo (Power whip)",
    tipo: "Planta",
    categoria: "Físico",
    potencia: 120,
    precision: 85,
    pp: 10,
    descripcion: "El usuario agita violentamente sus lianas o tentáculos  para golpear al objetivo."
  },
  m439: {
    nombre: "Romperrocas (Rock wrecker)",
    tipo: "Roca",
    categoria: "Físico",
    potencia: 150,
    precision: 90,
    pp: 5,
    descripcion: "Lanza una piedra enorme contra el objetivo, pero tiene que descansar el siguiente turno."
  },
  m440: {
    nombre: "Veneno X (Cross poison)",
    tipo: "Veneno",
    categoria: "Físico",
    potencia: 70,
    precision: 100,
    pp: 20,
    descripcion: "Tajo que puede envenenar al objetivo. Suele ser crítico."
  },
  m441: {
    nombre: "Lanzamugre (Gunk shot)",
    tipo: "Veneno",
    categoria: "Físico",
    potencia: 120,
    precision: 80,
    pp: 5,
    descripcion: "Lanza contra el objetivo basura asquerosa y puede envenenarlo."
  },
  m442: {
    nombre: "Cabeza de Hierro (Iron head)",
    tipo: "Acero",
    categoria: "Físico",
    potencia: 80,
    precision: 100,
    pp: 15,
    descripcion: "Ataca con su dura cabeza de hierro. Puede hacer que el objetivo se amedrente."
  },
  m443: {
    nombre: "Bomba Imán (Magnet bomb)",
    tipo: "Acero",
    categoria: "Físico",
    potencia: 60,
    precision: 0,
    pp: 20,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m444: {
    nombre: "Roca Afilada (Stone edge)",
    tipo: "Roca",
    categoria: "Físico",
    potencia: 100,
    precision: 80,
    pp: 5,
    descripcion: "Clava piedras muy afiladas al objetivo. Suele ser crítico."
  },
  m445: {
    nombre: "Seducción (Captivate)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 100,
    pp: 20,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m446: {
    nombre: "Trampa Rocas (Stealth rock)",
    tipo: "Roca",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 20,
    descripcion: "Una trampa de rocas que flota en el aire y daña a los objetivos que entran en combate."
  },
  m447: {
    nombre: "Hierba Lazo (Grass knot)",
    tipo: "Planta",
    categoria: "Especial",
    potencia: 0,
    precision: 100,
    pp: 20,
    descripcion: "Enreda al objetivo con hierba y lo derriba. Cuanto más pesado es el objetivo, más daño inflige."
  },
  m448: {
    nombre: "Cháchara (Chatter)",
    tipo: "Sonido",
    categoria: "Especial",
    potencia: 65,
    precision: 100,
    pp: 20,
    descripcion: "Ataca con una onda de sonido muy ruidosa compuesta por palabras y confunde al objetivo."
  },
  m449: {
    nombre: "Sentencia (Judgment)",
    tipo: "Normal",
    categoria: "Especial",
    potencia: 100,
    precision: 100,
    pp: 10,
    descripcion: "Emite incontables haces de luz. El tipo del movimiento  varía según la tabla que lleve el usuario."
  },
  m450: {
    nombre: "Picadura (Bug bite)",
    tipo: "Bicho",
    categoria: "Físico",
    potencia: 60,
    precision: 100,
    pp: 20,
    descripcion: "Pica al objetivo. Si el objetivo lleva una baya, el usuario se la come y se beneficia de su efecto."
  },
  m451: {
    nombre: "Rayo Carga (Charge beam)",
    tipo: "Eléctrico",
    categoria: "Especial",
    potencia: 50,
    precision: 90,
    pp: 10,
    descripcion: "Lanza un rayo eléctrico contra el objetivo. Puede subir el Ataque Especial de quien lo usa."
  },
  m452: {
    nombre: "Mazazo (Wood hammer)",
    tipo: "Planta",
    categoria: "Físico",
    potencia: 120,
    precision: 100,
    pp: 15,
    descripcion: "Arremete contra el objetivo con su robusto cuerpo.  El agresor también sufre bastante daño."
  },
  m453: {
    nombre: "Acua Jet (Aqua jet)",
    tipo: "Agua",
    categoria: "Físico",
    potencia: 40,
    precision: 100,
    pp: 20,
    descripcion: "Ataque de una rapidez espeluznante. Este movimiento tiene prioridad alta."
  },
  m454: {
    nombre: "Al Ataque (Attack order)",
    tipo: "Bicho",
    categoria: "Físico",
    potencia: 90,
    precision: 100,
    pp: 15,
    descripcion: "El usuario llama a sus súbditos para que ataquen al objetivo. Suele ser crítico."
  },
  m455: {
    nombre: "A Defender (Defend order)",
    tipo: "Bicho",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "El usuario llama a sus súbditos para que formen un escudo viviente. Sube la Defensa y la Defensa Especial."
  },
  m456: {
    nombre: "Auxilio (Heal order)",
    tipo: "Bicho",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m457: {
    nombre: "Testarazo (Head smash)",
    tipo: "Roca",
    categoria: "Físico",
    potencia: 150,
    precision: 80,
    pp: 5,
    descripcion: "El usuario arriesga su vida y lanza un cabezazo con toda su fuerza. El agresor resulta seriamente dañado."
  },
  m458: {
    nombre: "Doble Golpe (Double hit)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 35,
    precision: 90,
    pp: 10,
    descripcion: "Golpea al objetivo dos veces seguidas con la cola u otras partes de su cuerpo."
  },
  m459: {
    nombre: "Distorsión (Roar of time)",
    tipo: "Dragón",
    categoria: "Especial",
    potencia: 150,
    precision: 90,
    pp: 5,
    descripcion: "Ataca al objetivo usando tal energía que el tiempo se distorsiona. El usuario descansa el siguiente turno."
  },
  m460: {
    nombre: "Corte Vacío (Spacial rend)",
    tipo: "Dragón",
    categoria: "Especial",
    potencia: 100,
    precision: 95,
    pp: 5,
    descripcion: "Desgarra al objetivo y el espacio a su alrededor.  Suele ser crítico."
  },
  m461: {
    nombre: "Danza Lunar (Lunar dance)",
    tipo: "Psíquico",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "El usuario se debilita, pero el Pokémon que lo sustituye recupera su estado, los PS y los PP."
  },
  m462: {
    nombre: "Agarrón (Crush grip)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 0,
    precision: 100,
    pp: 5,
    descripcion: "Estruja al objetivo con gran fuerza. Cuantos más PS le queden al objetivo, más fuerte será el ataque."
  },
  m463: {
    nombre: "Lluvia Ígnea (Magma storm)",
    tipo: "Fuego",
    categoria: "Especial",
    potencia: 100,
    precision: 75,
    pp: 5,
    descripcion: "El objetivo queda atrapado en una tormenta de fuego que dura de cuatro a cinco turnos."
  },
  m464: {
    nombre: "Brecha Negra (Dark void)",
    tipo: "Siniestro",
    categoria: "Estado",
    potencia: 0,
    precision: 50,
    pp: 10,
    descripcion: "El objetivo es enviado a un mundo de tinieblas que lo hace dormir."
  },
  m465: {
    nombre: "Fogonazo (Seed flare)",
    tipo: "Planta",
    categoria: "Especial",
    potencia: 120,
    precision: 85,
    pp: 5,
    descripcion: "Una onda de choque se libera del cuerpo. Puede bajar mucho la Defensa Especial del objetivo."
  },
  m466: {
    nombre: "Viento Aciago (Ominous wind)",
    tipo: "Fantasma",
    categoria: "Especial",
    potencia: 60,
    precision: 100,
    pp: 5,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m467: {
    nombre: "Golpe Umbrío (Shadow force)",
    tipo: "Fantasma",
    categoria: "Físico",
    potencia: 120,
    precision: 100,
    pp: 5,
    descripcion: "En el primer turno, desaparece. En el segundo, golpea al objetivo aunque se esté protegiendo."
  },
  m468: {
    nombre: "Afilagarras (Hone claws)",
    tipo: "Siniestro",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 15,
    descripcion: "El usuario se afila las garras para aumentar su Ataque y Precisión."
  },
  m469: {
    nombre: "Vastaguardia (Wide guard)",
    tipo: "Roca",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "Bloquea los ataques de objetivo múltiple lanzados  contra tu equipo durante un turno."
  },
  m470: {
    nombre: "Isoguardia (Guard split)",
    tipo: "Psíquico",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "El usuario emplea sus poderes para hacer la media de su Defensa y Defensa Especial con las de su objetivo y compartirlas."
  },
  m471: {
    nombre: "Isofuerza (Power split)",
    tipo: "Psíquico",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "El usuario emplea sus poderes para hacer la media de su Ataque y Ataque Especial con los de su objetivo y compartirlos."
  },
  m472: {
    nombre: "Zona Extraña (Wonder room)",
    tipo: "Psíquico",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "Crea una zona misteriosa donde se intercambian la Defensa y la Defensa Especial de todos los Pokémon durante cinco turnos."
  },
  m473: {
    nombre: "Psicocarga (Psyshock)",
    tipo: "Psíquico",
    categoria: "Especial",
    potencia: 80,
    precision: 100,
    pp: 10,
    descripcion: "Crea una onda psíquica que causa daño físico al  objetivo."
  },
  m474: {
    nombre: "Carga Tóxica (Venoshock)",
    tipo: "Veneno",
    categoria: "Especial",
    potencia: 65,
    precision: 100,
    pp: 10,
    descripcion: "Cubre al objetivo con un líquido venenoso. El daño será doble si este ya está envenenado."
  },
  m475: {
    nombre: "Aligerar (Autotomize)",
    tipo: "Acero",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 15,
    descripcion: "El usuario se desprende de partes prescindibles de su cuerpo para hacerse más ligero y aumentar mucho su Velocidad."
  },
  m476: {
    nombre: "Polvo Ira (Rage powder)",
    tipo: "Bicho",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 20,
    descripcion: "Usa un polvo que irrita y centra en el usuario la  atención y los ataques de los rivales."
  },
  m477: {
    nombre: "Telequinesis (Telekinesis)",
    tipo: "Psíquico",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 15,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m478: {
    nombre: "Zona Mágica (Magic room)",
    tipo: "Psíquico",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "Crea un espacio misterioso que inutiliza todos los  objetos de los Pokémon durante cinco turnos."
  },
  m479: {
    nombre: "Antiaéreo (Smack down)",
    tipo: "Roca",
    categoria: "Físico",
    potencia: 50,
    precision: 100,
    pp: 15,
    descripcion: "Ataca lanzando una piedra o un proyectil. Si el objetivo está en el aire, lo estrella contra el suelo."
  },
  m480: {
    nombre: "Llave Corsé (Storm throw)",
    tipo: "Lucha",
    categoria: "Físico",
    potencia: 60,
    precision: 100,
    pp: 10,
    descripcion: "Lanza un golpe devastador. Siempre asesta un golpe crítico."
  },
  m481: {
    nombre: "Pirotecnia (Flame burst)",
    tipo: "Fuego",
    categoria: "Especial",
    potencia: 70,
    precision: 100,
    pp: 15,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m482: {
    nombre: "Onda Tóxica (Sludge wave)",
    tipo: "Veneno",
    categoria: "Especial",
    potencia: 95,
    precision: 100,
    pp: 10,
    descripcion: "Una onda tóxica que daña a los Pokémon de alrededor. Puede envenenar."
  },
  m483: {
    nombre: "Danza Aleteo (Quiver dance)",
    tipo: "Bicho",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 20,
    descripcion: "Danza mística que sube el Ataque Especial, la Defensa Especial y la Velocidad."
  },
  m484: {
    nombre: "Cuerpo Pesado (Heavy slam)",
    tipo: "Acero",
    categoria: "Físico",
    potencia: 0,
    precision: 100,
    pp: 10,
    descripcion: "El usuario golpea con todo su cuerpo. Cuanto mayor sea su peso comparado con el del objetivo, más daño causará."
  },
  m485: {
    nombre: "Sincrorruido (Synchronoise)",
    tipo: "Psíquico",
    categoria: "Especial",
    potencia: 120,
    precision: 100,
    pp: 10,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m486: {
    nombre: "Bola Voltio (Electro ball)",
    tipo: "Eléctrico",
    categoria: "Especial",
    potencia: 0,
    precision: 100,
    pp: 10,
    descripcion: "Lanza una bola eléctrica. Cuanto mayor sea la Velocidad del usuario en comparación con la del  objetivo, mayor será el daño causado."
  },
  m487: {
    nombre: "Anegar (Soak)",
    tipo: "Agua",
    categoria: "Estado",
    potencia: 0,
    precision: 100,
    pp: 20,
    descripcion: "Potente lluvia que transforma al objetivo en un  Pokémon de tipo Agua."
  },
  m488: {
    nombre: "Nitrocarga (Flame charge)",
    tipo: "Fuego",
    categoria: "Físico",
    potencia: 50,
    precision: 100,
    pp: 20,
    descripcion: "Llamas que golpean al objetivo y aumentan la  Velocidad del atacante."
  },
  m489: {
    nombre: "Enrosque (Coil)",
    tipo: "Veneno",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 20,
    descripcion: "El usuario se concentra, lo que le permite aumentar  su Ataque, Defensa y Precisión."
  },
  m490: {
    nombre: "Puntapié (Low sweep)",
    tipo: "Lucha",
    categoria: "Físico",
    potencia: 65,
    precision: 100,
    pp: 20,
    descripcion: "Ataque rápido dirigido a los pies del objetivo que le hace perder Velocidad."
  },
  m491: {
    nombre: "Bomba Ácida (Acid spray)",
    tipo: "Veneno",
    categoria: "Especial",
    potencia: 40,
    precision: 100,
    pp: 20,
    descripcion: "Ataca con un líquido corrosivo que reduce mucho la Defensa Especial del objetivo."
  },
  m492: {
    nombre: "Juego Sucio (Foul play)",
    tipo: "Siniestro",
    categoria: "Físico",
    potencia: 95,
    precision: 100,
    pp: 15,
    descripcion: "El usuario emplea la fuerza del objetivo para atacarlo. Cuanto mayor es el Ataque del objetivo, más daño provoca."
  },
  m493: {
    nombre: "Onda Simple (Simple beam)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 100,
    pp: 15,
    descripcion: "Lanza una onda psíquica que hace que la habilidad del objetivo pase a ser Simple."
  },
  m494: {
    nombre: "Danza Amiga (Entrainment)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 100,
    pp: 15,
    descripcion: "Una extraña danza que hace que el usuario y el objetivo tengan la misma habilidad."
  },
  m495: {
    nombre: "Cede Paso (After you)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 15,
    descripcion: "Si el usuario es el más rápido, permite al objetivo usar un movimiento justo tras él, adelantándose a Pokémon más rápidos."
  },
  m496: {
    nombre: "Canon (Round)",
    tipo: "Sonido",
    categoria: "Especial",
    potencia: 60,
    precision: 100,
    pp: 15,
    descripcion: "Un canto que ataca al objetivo. Cuantos más Pokémon lo usan, más aumenta de potencia."
  },
  m497: {
    nombre: "Eco Voz (Echoed voice)",
    tipo: "Sonido",
    categoria: "Especial",
    potencia: 40,
    precision: 100,
    pp: 15,
    descripcion: "Un susurro que aumenta de potencia conforme el  usuario y otros Pokémon lo van utilizando."
  },
  m498: {
    nombre: "Guardia Baja (Chip away)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 70,
    precision: 100,
    pp: 20,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m499: {
    nombre: "Niebla Clara (Clear smog)",
    tipo: "Veneno",
    categoria: "Especial",
    potencia: 50,
    precision: 0,
    pp: 15,
    descripcion: "Ataca al objetivo con una singular bola de lodo que elimina cualquier cambio en sus características."
  },
  m500: {
    nombre: "Poder Reserva (Stored power)",
    tipo: "Psíquico",
    categoria: "Especial",
    potencia: 20,
    precision: 100,
    pp: 10,
    descripcion: "Acumula poder para golpear. Cuanto más suban las características del usuario, mayor será el daño."
  },
  m501: {
    nombre: "Anticipo (Quick guard)",
    tipo: "Lucha",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 15,
    descripcion: "Se protege a sí mismo y a sus aliados de movimientos con prioridad."
  },
  m502: {
    nombre: "Cambio de Banda (Ally switch)",
    tipo: "Psíquico",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 15,
    descripcion: "Extraño poder que intercambia la posición del usuario con la de un aliado sobre el terreno de combate."
  },
  m503: {
    nombre: "Escaldar (Scald)",
    tipo: "Agua",
    categoria: "Especial",
    potencia: 80,
    precision: 100,
    pp: 15,
    descripcion: "Ataca arrojando agua hirviendo al objetivo. Puede causar quemaduras."
  },
  m504: {
    nombre: "Rompecoraza (Shell smash)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 15,
    descripcion: "El usuario rompe su coraza y baja su Defensa y Defensa Especial, pero aumenta mucho su Ataque,  Ataque Especial y Velocidad."
  },
  m505: {
    nombre: "Pulso Cura (Heal pulse)",
    tipo: "Psíquico",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "Una onda curativa restaura la mitad de los PS máximos del objetivo."
  },
  m506: {
    nombre: "Infortunio (Hex)",
    tipo: "Fantasma",
    categoria: "Especial",
    potencia: 65,
    precision: 100,
    pp: 10,
    descripcion: "Ataque que causa un gran daño a los objetivos que sufren problemas de estado."
  },
  m507: {
    nombre: "Caída Libre (Sky drop)",
    tipo: "Volador",
    categoria: "Físico",
    potencia: 60,
    precision: 100,
    pp: 10,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m508: {
    nombre: "Cambio de Marcha (Shift gear)",
    tipo: "Acero",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "Al hacer girar los engranajes, el usuario mejora su Ataque y aumenta mucho su Velocidad."
  },
  m509: {
    nombre: "Llave Giro (Circle throw)",
    tipo: "Lucha",
    categoria: "Físico",
    potencia: 60,
    precision: 90,
    pp: 10,
    descripcion: "Lanza por los aires al objetivo y hace que salga otro  Pokémon. Si es uno salvaje, acaba el combate."
  },
  m510: {
    nombre: "Calcinación (Incinerate)",
    tipo: "Fuego",
    categoria: "Especial",
    potencia: 60,
    precision: 100,
    pp: 15,
    descripcion: "Llamas que golpean a los objetivos adyacentes. Si estos llevan bayas o ciertos objetos, se quemarán y ya no se podrán usar."
  },
  m511: {
    nombre: "Último Lugar (Quash)",
    tipo: "Siniestro",
    categoria: "Estado",
    potencia: 0,
    precision: 100,
    pp: 15,
    descripcion: "Consigue que el objetivo sea el último en moverse."
  },
  m512: {
    nombre: "Acróbata (Acrobatics)",
    tipo: "Volador",
    categoria: "Físico",
    potencia: 55,
    precision: 100,
    pp: 15,
    descripcion: "Golpea ágilmente. Si el usuario no porta ningún objeto, el objetivo resulta seriamente dañado."
  },
  m513: {
    nombre: "Clonatipo (Reflect type)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 15,
    descripcion: "Cambia el tipo del Pokémon al mismo tipo que el del objetivo."
  },
  m514: {
    nombre: "Represalia (Retaliate)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 70,
    precision: 100,
    pp: 5,
    descripcion: "Venga a los amigos caídos. Si en el turno anterior han derrotado a alguno, la potencia del ataque aumentará."
  },
  m515: {
    nombre: "Sacrificio (Final gambit)",
    tipo: "Lucha",
    categoria: "Especial",
    potencia: 0,
    precision: 100,
    pp: 5,
    descripcion: "El usuario se sacrifica causándole un daño al objetivo equivalente a sus propios PS perdidos."
  },
  m516: {
    nombre: "Ofrenda (Bestow)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 15,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m517: {
    nombre: "Infierno (Inferno)",
    tipo: "Fuego",
    categoria: "Especial",
    potencia: 100,
    precision: 50,
    pp: 5,
    descripcion: "Ataca con una gran ráfaga de fuego que causa  quemaduras."
  },
  m518: {
    nombre: "Voto Agua (Water pledge)",
    tipo: "Agua",
    categoria: "Especial",
    potencia: 80,
    precision: 100,
    pp: 10,
    descripcion: "Ataca con columnas de agua. Combinado con Voto Fuego, crea un arcoíris y aumenta su potencia."
  },
  m519: {
    nombre: "Voto Fuego (Fire pledge)",
    tipo: "Fuego",
    categoria: "Especial",
    potencia: 80,
    precision: 100,
    pp: 10,
    descripcion: "Ataca con columnas de fuego. Combinado con Voto Planta, crea un mar de llamas y aumenta su  potencia."
  },
  m520: {
    nombre: "Voto Planta (Grass pledge)",
    tipo: "Planta",
    categoria: "Especial",
    potencia: 80,
    precision: 100,
    pp: 10,
    descripcion: "Ataca con columnas de hojas. Combinado con Voto Agua, crea un pantano y aumenta su potencia."
  },
  m521: {
    nombre: "Voltiocambio (Volt switch)",
    tipo: "Eléctrico",
    categoria: "Especial",
    potencia: 70,
    precision: 100,
    pp: 20,
    descripcion: "Tras atacar, el usuario vuelve a toda prisa para dar paso a otro Pokémon del equipo."
  },
  m522: {
    nombre: "Estoicismo (Struggle bug)",
    tipo: "Bicho",
    categoria: "Especial",
    potencia: 50,
    precision: 100,
    pp: 20,
    descripcion: "El usuario opone resistencia y ataca a los oponentes.  También reduce su Ataque Especial."
  },
  m523: {
    nombre: "Terratemblor (Bulldoze)",
    tipo: "Tierra",
    categoria: "Físico",
    potencia: 60,
    precision: 100,
    pp: 20,
    descripcion: "Sacudida sísmica que afecta a los demás Pokémon  adyacentes y también reduce su Velocidad."
  },
  m524: {
    nombre: "Vaho Gélido (Frost breath)",
    tipo: "Hielo",
    categoria: "Especial",
    potencia: 60,
    precision: 90,
    pp: 10,
    descripcion: "Quien lo usa ataca lanzando un aliento gélido. Siempre asesta un golpe crítico."
  },
  m525: {
    nombre: "Cola Dragón (Dragon tail)",
    tipo: "Dragón",
    categoria: "Físico",
    potencia: 60,
    precision: 90,
    pp: 10,
    descripcion: "Ataca al objetivo y lo obliga a cambiarse por otro  Pokémon. Si es uno salvaje, acaba el combate."
  },
  m526: {
    nombre: "Avivar (Work up)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 30,
    descripcion: "Quien lo usa se concentra y potencia su Ataque y  su Ataque Especial."
  },
  m527: {
    nombre: "Electrotela (Electroweb)",
    tipo: "Eléctrico",
    categoria: "Especial",
    potencia: 55,
    precision: 95,
    pp: 15,
    descripcion: "Atrapa y ataca a los objetivos con una telaraña  eléctrica. También reduce su Velocidad."
  },
  m528: {
    nombre: "Voltio Cruel (Wild charge)",
    tipo: "Eléctrico",
    categoria: "Físico",
    potencia: 90,
    precision: 100,
    pp: 15,
    descripcion: "Carga eléctrica muy potente que también hiere  ligeramente a quien la usa."
  },
  m529: {
    nombre: "Taladradora (Drill run)",
    tipo: "Tierra",
    categoria: "Físico",
    potencia: 80,
    precision: 95,
    pp: 10,
    descripcion: "El usuario golpea usando su cuerpo como un taladro.  Suele ser crítico."
  },
  m530: {
    nombre: "Golpe Bis (Dual chop)",
    tipo: "Dragón",
    categoria: "Físico",
    potencia: 40,
    precision: 90,
    pp: 15,
    descripcion: "Golpea dos veces seguidas con las partes más recias de su cuerpo."
  },
  m531: {
    nombre: "Arrumaco (Heart stamp)",
    tipo: "Psíquico",
    categoria: "Físico",
    potencia: 60,
    precision: 100,
    pp: 25,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m532: {
    nombre: "Asta Drenaje (Horn leech)",
    tipo: "Planta",
    categoria: "Físico",
    potencia: 75,
    precision: 100,
    pp: 10,
    descripcion: "Un golpe que drena energía. El Pokémon recupera la mitad de los PS arrebatados al objetivo."
  },
  m533: {
    nombre: "Espada Santa (Sacred sword)",
    tipo: "Lucha",
    categoria: "Físico",
    potencia: 90,
    precision: 100,
    pp: 15,
    descripcion: "El usuario ataca con una espada, ignorando cualquier  cambio en las características del objetivo."
  },
  m534: {
    nombre: "Concha Filo (Razor shell)",
    tipo: "Agua",
    categoria: "Físico",
    potencia: 75,
    precision: 95,
    pp: 10,
    descripcion: "Una afilada vieira ataca al objetivo. También puede  hacer disminuir su Defensa."
  },
  m535: {
    nombre: "Golpe Calor (Heat crash)",
    tipo: "Fuego",
    categoria: "Físico",
    potencia: 0,
    precision: 100,
    pp: 10,
    descripcion: "El usuario ataca con su cuerpo ardiente. Cuanto mayor sea su peso comparado con el del objetivo, más daño causará."
  },
  m536: {
    nombre: "Ciclón de Hojas (Leaf tornado)",
    tipo: "Planta",
    categoria: "Especial",
    potencia: 65,
    precision: 90,
    pp: 10,
    descripcion: "Tritura con afiladas hojas y puede bajar la Precisión del objetivo."
  },
  m537: {
    nombre: "Rodillo de Púas (Steamroller)",
    tipo: "Bicho",
    categoria: "Físico",
    potencia: 65,
    precision: 100,
    pp: 20,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m538: {
    nombre: "Rizo Algodón (Cotton guard)",
    tipo: "Planta",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "Cubre al Pokémon con una madeja protectora. Aumenta muchísimo la Defensa."
  },
  m539: {
    nombre: "Pulso Noche (Night daze)",
    tipo: "Siniestro",
    categoria: "Especial",
    potencia: 85,
    precision: 95,
    pp: 10,
    descripcion: "Ataca al objetivo con una onda siniestra. Puede bajar su Precisión."
  },
  m540: {
    nombre: "Onda Mental (Psystrike)",
    tipo: "Psíquico",
    categoria: "Especial",
    potencia: 100,
    precision: 100,
    pp: 10,
    descripcion: "Crea una onda psíquica que causa daño físico al  objetivo."
  },
  m541: {
    nombre: "Plumerazo (Tail slap)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 25,
    precision: 85,
    pp: 10,
    descripcion: "Golpea con la cola de dos a cinco veces seguidas."
  },
  m542: {
    nombre: "Vendaval (Hurricane)",
    tipo: "Volador",
    categoria: "Especial",
    potencia: 110,
    precision: 70,
    pp: 10,
    descripcion: "Golpea al objetivo con un fuerte torbellino que envuelve al rival y puede confundirlo."
  },
  m543: {
    nombre: "Ariete (Head charge)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 120,
    precision: 100,
    pp: 15,
    descripcion: "Propina un tremendo cabezazo. También daña al  usuario un poco."
  },
  m544: {
    nombre: "Rueda Doble (Gear grind)",
    tipo: "Acero",
    categoria: "Físico",
    potencia: 50,
    precision: 85,
    pp: 15,
    descripcion: "Rota dos engranajes de hierro sobre el objetivo. Golpea dos veces."
  },
  m545: {
    nombre: "Bomba Ígnea (Searing shot)",
    tipo: "Fuego",
    categoria: "Especial",
    potencia: 100,
    precision: 100,
    pp: 5,
    descripcion: "Un infierno de llamas daña a los Pokémon adyacentes en combate. Puede quemar."
  },
  m546: {
    nombre: "Tecno Shock (Techno blast)",
    tipo: "Normal",
    categoria: "Especial",
    potencia: 120,
    precision: 100,
    pp: 5,
    descripcion: "Ataca al objetivo con un gran láser. El tipo del ataque lo determina el cartucho que porta el usuario."
  },
  m547: {
    nombre: "Canto Arcaico (Relic song)",
    tipo: "Sonido",
    categoria: "Especial",
    potencia: 75,
    precision: 100,
    pp: 10,
    descripcion: "Ataca conmoviendo a los rivales de alrededor con un antiguo canto. Puede dormirlos."
  },
  m548: {
    nombre: "Sable Místico (Secret sword)",
    tipo: "Lucha",
    categoria: "Especial",
    potencia: 85,
    precision: 100,
    pp: 10,
    descripcion: "Ensarta al objetivo con un largo cuerno dotado de un poder místico que provoca daño físico."
  },
  m549: {
    nombre: "Mundo Gélido (Glaciate)",
    tipo: "Hielo",
    categoria: "Especial",
    potencia: 65,
    precision: 95,
    pp: 10,
    descripcion: "Ataque con aire helado que baja la Velocidad del  objetivo."
  },
  m550: {
    nombre: "Ataque Fulgor (Bolt strike)",
    tipo: "Eléctrico",
    categoria: "Físico",
    potencia: 130,
    precision: 85,
    pp: 5,
    descripcion: "Ataca envolviéndose de una gran carga eléctrica y  embistiendo al objetivo con ella. Puede paralizar."
  },
  m551: {
    nombre: "Llama Azul (Blue flare)",
    tipo: "Fuego",
    categoria: "Especial",
    potencia: 130,
    precision: 85,
    pp: 5,
    descripcion: "Ataca con una bella pero potente llama azul que rodea al objetivo. Puede quemarlo."
  },
  m552: {
    nombre: "Danza Llama (Fiery dance)",
    tipo: "Fuego",
    categoria: "Especial",
    potencia: 80,
    precision: 100,
    pp: 10,
    descripcion: "Envuelve en llamas y daña al objetivo. Puede aumentar el Ataque Especial de quien lo usa."
  },
  m553: {
    nombre: "Rayo Gélido (Freeze shock)",
    tipo: "Hielo",
    categoria: "Físico",
    potencia: 140,
    precision: 90,
    pp: 5,
    descripcion: "El usuario carga un bloque de hielo con electricidad en el primer turno y ataca con él en el segundo. Puede paralizar."
  },
  m554: {
    nombre: "Llama Gélida (Ice burn)",
    tipo: "Hielo",
    categoria: "Especial",
    potencia: 140,
    precision: 90,
    pp: 5,
    descripcion: "Ataca al objetivo en el segundo turno rodeándolo de un aire gélido. Puede causar quemaduras."
  },
  m555: {
    nombre: "Alarido (Snarl)",
    tipo: "Sonido",
    categoria: "Especial",
    potencia: 55,
    precision: 95,
    pp: 15,
    descripcion: "Chillido desagradable que baja el Ataque Especial del rival."
  },
  m556: {
    nombre: "Chuzos (Icicle crash)",
    tipo: "Hielo",
    categoria: "Físico",
    potencia: 85,
    precision: 90,
    pp: 10,
    descripcion: "Lanza grandes carámbanos. Puede amedrentar al objetivo."
  },
  m557: {
    nombre: "V de Fuego (V create)",
    tipo: "Fuego",
    categoria: "Físico",
    potencia: 180,
    precision: 95,
    pp: 5,
    descripcion: "Golpea con una V de llamas al objetivo. Baja la  Defensa, la Defensa Especial y la Velocidad de  quien lo usa."
  },
  m558: {
    nombre: "Llama Fusión (Fusion flare)",
    tipo: "Fuego",
    categoria: "Especial",
    potencia: 100,
    precision: 100,
    pp: 5,
    descripcion: "Ataca con una llamarada gigantesca. Aumenta su  potencia si es influenciada por una gran energía eléctrica."
  },
  m559: {
    nombre: "Rayo Fusión (Fusion bolt)",
    tipo: "Eléctrico",
    categoria: "Físico",
    potencia: 100,
    precision: 100,
    pp: 5,
    descripcion: "Ataca con una enorme descarga eléctrica. Aumenta  su potencia si es influenciada por una gigantesca  llamarada."
  },
  m560: {
    nombre: "Plancha Voladora (Flying press)",
    tipo: "Lucha",
    categoria: "Físico",
    potencia: 100,
    precision: 95,
    pp: 10,
    descripcion: "El Pokémon que lo usa se lanza sobre su oponente.  Este movimiento es de tipo Lucha y tipo Volador al  mismo tiempo."
  },
  m561: {
    nombre: "Escudo Tatami (Mat block)",
    tipo: "Lucha",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "El usuario usa un tatami para escudarse de los ataques enemigos. Protege también a los aliados. No funciona contra movimientos de estado."
  },
  m562: {
    nombre: "Eructo (Belch)",
    tipo: "Veneno",
    categoria: "Especial",
    potencia: 120,
    precision: 90,
    pp: 10,
    descripcion: "El Pokémon causa daño a su oponente lanzándole  un eructo. Para poder utilizar este movimiento tiene  que llevar una baya y comérsela."
  },
  m563: {
    nombre: "Fertilizante (Rototiller)",
    tipo: "Tierra",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m564: {
    nombre: "Red Viscosa (Sticky web)",
    tipo: "Bicho",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 20,
    descripcion: "Coloca una red pegajosa alrededor del equipo rival que baja la Velocidad de cualquier adversario que entre a combatir."
  },
  m565: {
    nombre: "Aguijón Letal (Fell stinger)",
    tipo: "Bicho",
    categoria: "Físico",
    potencia: 50,
    precision: 100,
    pp: 25,
    descripcion: "Si se derrota al objetivo utilizando este movimiento, aumenta muchísimo el Ataque del usuario."
  },
  m566: {
    nombre: "Golpe Fantasma (Phantom force)",
    tipo: "Fantasma",
    categoria: "Físico",
    potencia: 90,
    precision: 100,
    pp: 10,
    descripcion: "El usuario desaparece en el primer turno y ataca a su objetivo en el segundo. Permite acertar aunque el objetivo esté protegiéndose."
  },
  m567: {
    nombre: "Halloween (Trick or treat)",
    tipo: "Fantasma",
    categoria: "Estado",
    potencia: 0,
    precision: 100,
    pp: 20,
    descripcion: "Invita al objetivo a celebrar Halloween, lo que añade  el tipo Fantasma a los tipos de este."
  },
  m568: {
    nombre: "Rugido de Guerra (Noble roar)",
    tipo: "Sonido",
    categoria: "Estado",
    potencia: 0,
    precision: 100,
    pp: 30,
    descripcion: "Intimida a su oponente con un rugido de guerra, lo que hace que disminuyan tanto su Ataque como su Ataque Especial."
  },
  m569: {
    nombre: "Cortina Plasma (Ion deluge)",
    tipo: "Eléctrico",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 25,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m570: {
    nombre: "Carga Parábola (Parabolic charge)",
    tipo: "Eléctrico",
    categoria: "Especial",
    potencia: 65,
    precision: 100,
    pp: 20,
    descripcion: "Inflige daño a todos los Pokémon a su alrededor. El usuario absorbe la mitad del daño producido para restaurar sus propios PS."
  },
  m571: {
    nombre: "Condena Silvana (Forests curse)",
    tipo: "Planta",
    categoria: "Estado",
    potencia: 0,
    precision: 100,
    pp: 20,
    descripcion: "El objetivo es presa de la maldición del bosque, por lo que pasa a ser un Pokémon de tipo Planta, además de conservar sus tipos habituales."
  },
  m572: {
    nombre: "Tormenta Floral (Petal blizzard)",
    tipo: "Planta",
    categoria: "Físico",
    potencia: 90,
    precision: 100,
    pp: 15,
    descripcion: "El usuario desata un intenso vendaval de pétalos que daña a los Pokémon a su alrededor."
  },
  m573: {
    nombre: "Liofilización (Freeze dry)",
    tipo: "Hielo",
    categoria: "Especial",
    potencia: 70,
    precision: 100,
    pp: 20,
    descripcion: "Enfría súbitamente al objetivo e incluso puede congelarlo. Es supereficaz contra Pokémon de tipo Agua."
  },
  m574: {
    nombre: "Voz Cautivadora (Disarming voice)",
    tipo: "Sonido",
    categoria: "Especial",
    potencia: 40,
    precision: 0,
    pp: 15,
    descripcion: "Obnubila a los oponentes con su fascinante voz y les provoca daños emocionales. Siempre acierta al objetivo."
  },
  m575: {
    nombre: "Última Palabra (Parting shot)",
    tipo: "Sonido",
    categoria: "Estado",
    potencia: 0,
    precision: 100,
    pp: 20,
    descripcion: "El usuario se cambia por otro Pokémon de su equipo, pero antes amedrenta a su oponente y hace que disminuyan su Ataque y Ataque Especial."
  },
  m576: {
    nombre: "Reversión (Topsy turvy)",
    tipo: "Siniestro",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 20,
    descripcion: "Invierte por completo los cambios en las características del objetivo."
  },
  m577: {
    nombre: "Beso Drenaje (Draining kiss)",
    tipo: "Hada",
    categoria: "Especial",
    potencia: 50,
    precision: 100,
    pp: 10,
    descripcion: "El usuario absorbe PS del objetivo con un beso y restaura su propia energía en una cantidad igual o superior a la mitad del daño infligido."
  },
  m578: {
    nombre: "Truco Defensa (Crafty shield)",
    tipo: "Hada",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "Usa unos misteriosos poderes para protegerse a sí  mismo y a sus aliados de movimientos de estado, pero no de otro tipo de ataques."
  },
  m579: {
    nombre: "Defensa Floral (Flower shield)",
    tipo: "Hada",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "Aumenta la Defensa de todos los Pokémon de tipo Planta que hay en el combate usando unos misteriosos poderes."
  },
  m580: {
    nombre: "Campo de Hierba (Grassy terrain)",
    tipo: "Planta",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "Durante cinco turnos, se potencian los movimientos de tipo Planta y los Pokémon que están en contacto con el suelo recuperan PS en cada turno."
  },
  m581: {
    nombre: "Campo de Niebla (Misty terrain)",
    tipo: "Hada",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "Durante cinco turnos, los Pokémon que están en el suelo no sufren problemas de estado y se reduce a la mitad el daño de los movimientos de tipo Dragón."
  },
  m582: {
    nombre: "Electrificación (Electrify)",
    tipo: "Eléctrico",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 20,
    descripcion: "Si el objetivo queda electrificado antes de usar un movimiento, este será de tipo Eléctrico."
  },
  m583: {
    nombre: "Carantoña (Play rough)",
    tipo: "Hada",
    categoria: "Físico",
    potencia: 90,
    precision: 90,
    pp: 10,
    descripcion: "El Pokémon que lo usa le hace cucamonas al objetivo y lo ataca. Puede disminuir el Ataque del objetivo."
  },
  m584: {
    nombre: "Viento Feérico (Fairy wind)",
    tipo: "Hada",
    categoria: "Especial",
    potencia: 40,
    precision: 100,
    pp: 30,
    descripcion: "El Pokémon que lo usa desata un vendaval feérico que arremete contra el objetivo."
  },
  m585: {
    nombre: "Fuerza Lunar (Moonblast)",
    tipo: "Hada",
    categoria: "Especial",
    potencia: 95,
    precision: 100,
    pp: 15,
    descripcion: "Invoca el poder de la luna para atacar al objetivo.  Puede disminuir el Ataque Especial del objetivo."
  },
  m586: {
    nombre: "Estruendo (Boomburst)",
    tipo: "Sonido",
    categoria: "Especial",
    potencia: 140,
    precision: 100,
    pp: 10,
    descripcion: "Ataca a todos los Pokémon a su alrededor con una  potentísima onda sonora."
  },
  m587: {
    nombre: "Cerrojo Feérico (Fairy lock)",
    tipo: "Hada",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "Consigue que ningún Pokémon pueda huir en el  siguiente turno echando un cerrojo."
  },
  m588: {
    nombre: "Escudo Real (Kings shield)",
    tipo: "Acero",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "El usuario adopta una postura defensiva y se protege de cualquier daño. Reduce el Ataque de cualquier Pokémon con el que entre en contacto."
  },
  m589: {
    nombre: "Camaradería (Play nice)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 20,
    descripcion: "Se hace amigo de su oponente y consigue que a este se le quiten las ganas de combatir. Además, reduce su Ataque."
  },
  m590: {
    nombre: "Confidencia (Confide)",
    tipo: "Sonido",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 20,
    descripcion: "Hace que el objetivo pierda la concentración  contándole un secreto. Disminuye el Ataque Especial del oponente."
  },
  m591: {
    nombre: "Torm. Diamantes (Diamond storm)",
    tipo: "Roca",
    categoria: "Físico",
    potencia: 100,
    precision: 95,
    pp: 5,
    descripcion: "Desata un devastador vendaval de diamantes para  dañar a los oponentes. Puede aumentar mucho la Defensa del usuario."
  },
  m592: {
    nombre: "Chorro de Vapor (Steam eruption)",
    tipo: "Agua",
    categoria: "Especial",
    potencia: 110,
    precision: 95,
    pp: 5,
    descripcion: "Envuelve al Pokémon oponente con vapor extremadamente caliente que puede llegar a quemarlo."
  },
  m593: {
    nombre: "Paso Dimensional (Hyperspace hole)",
    tipo: "Psíquico",
    categoria: "Especial",
    potencia: 80,
    precision: 0,
    pp: 5,
    descripcion: "El usuario aparece junto al rival usando un agujero dimensional y le asesta un golpe que movimientos como Protección o Detección no pueden evitar."
  },
  m594: {
    nombre: "Shuriken de Agua (Water shuriken)",
    tipo: "Agua",
    categoria: "Especial",
    potencia: 15,
    precision: 100,
    pp: 20,
    descripcion: "Golpea al oponente de dos a cinco veces con estrellas arrojadizas hechas de mucosidad. Este movimiento tiene prioridad alta."
  },
  m595: {
    nombre: "Llama Embrujada (Mystical fire)",
    tipo: "Fuego",
    categoria: "Especial",
    potencia: 75,
    precision: 100,
    pp: 10,
    descripcion: "El usuario lanza por la boca una singular llama a gran temperatura con la que ataca a su oponente y baja su Ataque Especial."
  },
  m596: {
    nombre: "Barrera Espinosa (Spiky shield)",
    tipo: "Planta",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "Protege al usuario de ataques, e inflige daño a quien se los lance si entra en contacto con él."
  },
  m597: {
    nombre: "Niebla Aromática (Aromatic mist)",
    tipo: "Hada",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 20,
    descripcion: "Consigue aumentar la Defensa Especial de un Pokémon de su equipo con una fragancia misteriosa."
  },
  m598: {
    nombre: "Onda Anómala (Eerie impulse)",
    tipo: "Eléctrico",
    categoria: "Estado",
    potencia: 0,
    precision: 100,
    pp: 15,
    descripcion: "El usuario irradia unas raras ondas que, al alcanzar a un oponente, hacen que disminuya mucho su Ataque Especial."
  },
  m599: {
    nombre: "Trampa Venenosa (Venom drench)",
    tipo: "Veneno",
    categoria: "Estado",
    potencia: 0,
    precision: 100,
    pp: 20,
    descripcion: "Impregna a su objetivo con un líquido venenoso que disminuye el Ataque, el Ataque Especial y la Velocidad. Solo afecta a Pokémon ya envenenados."
  },
  m600: {
    nombre: "Polvo Explosivo (Powder)",
    tipo: "Bicho",
    categoria: "Estado",
    potencia: 0,
    precision: 100,
    pp: 20,
    descripcion: "Esparce un polvo sobre el objetivo. Si este usa un movimiento de tipo Fuego en el mismo turno, el polvo explota y le inflige daño."
  },
  m601: {
    nombre: "Geocontrol (Geomancy)",
    tipo: "Hada",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "Concentra energía durante el primer turno, de forma que su Velocidad, Ataque Especial y Defensa Especial aumenten mucho en el segundo."
  },
  m602: {
    nombre: "Aura Magnética (Magnetic flux)",
    tipo: "Eléctrico",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 20,
    descripcion: "Manipula el campo magnético y logra aumentar la Defensa y la Defensa Especial de los Pokémon aliados que cuenten con las habilidades Más y Menos."
  },
  m603: {
    nombre: "Paga Extra (Happy hour)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 30,
    descripcion: "Al usar este movimiento se consigue duplicar la  recompensa recibida tras el combate."
  },
  m604: {
    nombre: "Campo Eléctrico (Electric terrain)",
    tipo: "Eléctrico",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "Durante cinco turnos, se potencian los movimientos de tipo Eléctrico y los Pokémon que están en contacto con el suelo no pueden quedarse dormidos."
  },
  m605: {
    nombre: "Brillo Mágico (Dazzling gleam)",
    tipo: "Hada",
    categoria: "Especial",
    potencia: 80,
    precision: 100,
    pp: 10,
    descripcion: "Inflige daño a los oponentes con una potente luz."
  },
  m606: {
    nombre: "Celebración (Celebrate)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 40,
    descripcion: "El Pokémon te felicita en un día muy especial para ti."
  },
  m607: {
    nombre: "Manos Juntas (Hold hands)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 40,
    descripcion: "El Pokémon le da la mano a un aliado y ambos se  sienten muy felices."
  },
  m608: {
    nombre: "Ojitos Tiernos (Baby doll eyes)",
    tipo: "Hada",
    categoria: "Estado",
    potencia: 0,
    precision: 100,
    pp: 30,
    descripcion: "Lanza una mirada al objetivo con ojos acaramelados, con lo que logra que su Ataque se reduzca. Este movimiento tiene prioridad alta."
  },
  m609: {
    nombre: "Moflete Estático (Nuzzle)",
    tipo: "Eléctrico",
    categoria: "Físico",
    potencia: 20,
    precision: 100,
    pp: 20,
    descripcion: "Quien lo usa frota sus mofletes cargados de electricidad contra el objetivo y consigue paralizarlo."
  },
  m610: {
    nombre: "Clemencia (Hold back)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 40,
    precision: 100,
    pp: 40,
    descripcion: "El usuario se contiene a la hora de atacar y deja al objetivo con al menos 1 PS."
  },
  m611: {
    nombre: "Acoso (Infestation)",
    tipo: "Bicho",
    categoria: "Especial",
    potencia: 20,
    precision: 100,
    pp: 20,
    descripcion: "Hostiga al objetivo durante cuatro o cinco turnos e impide que pueda huir mientras tanto."
  },
  m612: {
    nombre: "Puño Incremento (Power up punch)",
    tipo: "Lucha",
    categoria: "Físico",
    potencia: 40,
    precision: 100,
    pp: 20,
    descripcion: "Cada vez que golpea a un oponente se endurecen sus puños. Si acierta al objetivo, el Ataque del usuario aumenta."
  },
  m613: {
    nombre: "Ala Mortífera (Oblivion wing)",
    tipo: "Volador",
    categoria: "Especial",
    potencia: 80,
    precision: 100,
    pp: 10,
    descripcion: "El usuario absorbe energía del objetivo y aumenta sus PS en una cantidad igual o superior a la mitad del daño infligido."
  },
  m614: {
    nombre: "Mil Flechas (Thousand arrows)",
    tipo: "Tierra",
    categoria: "Físico",
    potencia: 90,
    precision: 100,
    pp: 10,
    descripcion: "Acierta incluso a Pokémon que estén en el aire y los hace caer al suelo."
  },
  m615: {
    nombre: "Mil Temblores (Thousand waves)",
    tipo: "Tierra",
    categoria: "Físico",
    potencia: 90,
    precision: 100,
    pp: 10,
    descripcion: "El usuario genera ondas sísmicas que se propagan por el suelo y sacuden a los oponentes. Los Pokémon alcanzados no podrán huir del combate."
  },
  m616: {
    nombre: "Fuerza Telúrica (Lands wrath)",
    tipo: "Tierra",
    categoria: "Físico",
    potencia: 90,
    precision: 100,
    pp: 10,
    descripcion: "Acumula energía de la corteza terrestre y la concentra contra los oponentes, dañándolos."
  },
  m617: {
    nombre: "Luz Aniquiladora (Light of ruin)",
    tipo: "Hada",
    categoria: "Especial",
    potencia: 140,
    precision: 90,
    pp: 5,
    descripcion: "El usuario emplea el poder de la Flor Eterna para lanzar un potente rayo de luz, pero sufre bastante daño al hacerlo."
  },
  m618: {
    nombre: "Pulso Primigenio (Origin pulse)",
    tipo: "Agua",
    categoria: "Especial",
    potencia: 110,
    precision: 85,
    pp: 10,
    descripcion: "Ataca al objetivo con una infinidad de rayos de luz  azulada."
  },
  m619: {
    nombre: "Filo del Abismo (Precipice blades)",
    tipo: "Tierra",
    categoria: "Físico",
    potencia: 120,
    precision: 85,
    pp: 10,
    descripcion: "Hace que el poder latente de la tierra se manifieste en forma de hojas afiladas y ataca al objetivo con ellas."
  },
  m620: {
    nombre: "Ascenso Draco (Dragon ascent)",
    tipo: "Volador",
    categoria: "Físico",
    potencia: 120,
    precision: 100,
    pp: 5,
    descripcion: "El usuario se precipita desde el cielo a una velocidad de vértigo para atacar al objetivo, pero hace que bajen la Defensa y la Defensa Especial del usuario."
  },
  m621: {
    nombre: "Cerco Dimensión (Hyperspace fury)",
    tipo: "Siniestro",
    categoria: "Físico",
    potencia: 100,
    precision: 0,
    pp: 5,
    descripcion: "Ataca al objetivo con una ráfaga de golpes que pasan por alto los efectos de movimientos como Protección o Detección. Baja la Defensa del usuario."
  },
  m622: {
    nombre: "Carrera Arrolladora (Breakneck blitz  physical)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 0,
    precision: 0,
    pp: 1,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m623: {
    nombre: "Carrera Arrolladora (Breakneck blitz  special)",
    tipo: "Normal",
    categoria: "Especial",
    potencia: 0,
    precision: 0,
    pp: 1,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m624: {
    nombre: "Ráfaga Demoledora (All out pummeling  physical)",
    tipo: "Lucha",
    categoria: "Físico",
    potencia: 0,
    precision: 0,
    pp: 1,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m625: {
    nombre: "Ráfaga Demoledora (All out pummeling  special)",
    tipo: "Lucha",
    categoria: "Especial",
    potencia: 0,
    precision: 0,
    pp: 1,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m626: {
    nombre: "Picado Supersónico (Supersonic skystrike  physical)",
    tipo: "Volador",
    categoria: "Físico",
    potencia: 0,
    precision: 0,
    pp: 1,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m627: {
    nombre: "Picado Supersónico (Supersonic skystrike  special)",
    tipo: "Volador",
    categoria: "Especial",
    potencia: 0,
    precision: 0,
    pp: 1,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m628: {
    nombre: "Diluvio Corrosivo (Acid downpour  physical)",
    tipo: "Veneno",
    categoria: "Físico",
    potencia: 0,
    precision: 0,
    pp: 1,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m629: {
    nombre: "Diluvio Corrosivo (Acid downpour  special)",
    tipo: "Veneno",
    categoria: "Especial",
    potencia: 0,
    precision: 0,
    pp: 1,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m630: {
    nombre: "Barrena Telúrica (Tectonic rage  physical)",
    tipo: "Tierra",
    categoria: "Físico",
    potencia: 0,
    precision: 0,
    pp: 1,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m631: {
    nombre: "Barrena Telúrica (Tectonic rage  special)",
    tipo: "Tierra",
    categoria: "Especial",
    potencia: 0,
    precision: 0,
    pp: 1,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m632: {
    nombre: "Aplastamiento Gigalítico (Continental crush  physical)",
    tipo: "Roca",
    categoria: "Físico",
    potencia: 0,
    precision: 0,
    pp: 1,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m633: {
    nombre: "Aplastamiento Gigalítico (Continental crush  special)",
    tipo: "Roca",
    categoria: "Especial",
    potencia: 0,
    precision: 0,
    pp: 1,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m634: {
    nombre: "Guadaña Sedosa (Savage spin out  physical)",
    tipo: "Bicho",
    categoria: "Físico",
    potencia: 0,
    precision: 0,
    pp: 1,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m635: {
    nombre: "Guadaña Sedosa (Savage spin out  special)",
    tipo: "Bicho",
    categoria: "Especial",
    potencia: 0,
    precision: 0,
    pp: 1,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m636: {
    nombre: "Presa Espectral (Never ending nightmare  physical)",
    tipo: "Fantasma",
    categoria: "Físico",
    potencia: 0,
    precision: 0,
    pp: 1,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m637: {
    nombre: "Presa Espectral (Never ending nightmare  special)",
    tipo: "Fantasma",
    categoria: "Especial",
    potencia: 0,
    precision: 0,
    pp: 1,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m638: {
    nombre: "Hélice Trepanadora (Corkscrew crash  physical)",
    tipo: "Acero",
    categoria: "Físico",
    potencia: 0,
    precision: 0,
    pp: 1,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m639: {
    nombre: "Hélice Trepanadora (Corkscrew crash  special)",
    tipo: "Acero",
    categoria: "Especial",
    potencia: 0,
    precision: 0,
    pp: 1,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m640: {
    nombre: "Hecatombe Pírica (Inferno overdrive  physical)",
    tipo: "Fuego",
    categoria: "Físico",
    potencia: 0,
    precision: 0,
    pp: 1,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m641: {
    nombre: "Hecatombe Pírica (Inferno overdrive  special)",
    tipo: "Fuego",
    categoria: "Especial",
    potencia: 0,
    precision: 0,
    pp: 1,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m642: {
    nombre: "Hidrovórtice Abisal (Hydro vortex  physical)",
    tipo: "Agua",
    categoria: "Físico",
    potencia: 0,
    precision: 0,
    pp: 1,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m643: {
    nombre: "Hidrovórtice Abisal (Hydro vortex  special)",
    tipo: "Agua",
    categoria: "Especial",
    potencia: 0,
    precision: 0,
    pp: 1,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m644: {
    nombre: "Megatón Floral (Bloom doom  physical)",
    tipo: "Planta",
    categoria: "Físico",
    potencia: 0,
    precision: 0,
    pp: 1,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m645: {
    nombre: "Megatón Floral (Bloom doom  special)",
    tipo: "Planta",
    categoria: "Especial",
    potencia: 0,
    precision: 0,
    pp: 1,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m646: {
    nombre: "Gigavoltio Destructor (Gigavolt havoc  physical)",
    tipo: "Eléctrico",
    categoria: "Físico",
    potencia: 0,
    precision: 0,
    pp: 1,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m647: {
    nombre: "Gigavoltio Destructor (Gigavolt havoc  special)",
    tipo: "Eléctrico",
    categoria: "Especial",
    potencia: 0,
    precision: 0,
    pp: 1,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m648: {
    nombre: "Disruptor Psíquico (Shattered psyche  physical)",
    tipo: "Psíquico",
    categoria: "Físico",
    potencia: 0,
    precision: 0,
    pp: 1,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m649: {
    nombre: "Disruptor Psíquico (Shattered psyche  special)",
    tipo: "Psíquico",
    categoria: "Especial",
    potencia: 0,
    precision: 0,
    pp: 1,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m650: {
    nombre: "Crioaliento Despiadado (Subzero slammer  physical)",
    tipo: "Hielo",
    categoria: "Físico",
    potencia: 0,
    precision: 0,
    pp: 1,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m651: {
    nombre: "Crioaliento Despiadado (Subzero slammer  special)",
    tipo: "Hielo",
    categoria: "Especial",
    potencia: 0,
    precision: 0,
    pp: 1,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m652: {
    nombre: "Dracoaliento Devastador (Devastating drake  physical)",
    tipo: "Dragón",
    categoria: "Físico",
    potencia: 0,
    precision: 0,
    pp: 1,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m653: {
    nombre: "Dracoaliento Devastador (Devastating drake  special)",
    tipo: "Dragón",
    categoria: "Especial",
    potencia: 0,
    precision: 0,
    pp: 1,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m654: {
    nombre: "Agujero Negro Aniquilador (Black hole eclipse  physical)",
    tipo: "Siniestro",
    categoria: "Físico",
    potencia: 0,
    precision: 0,
    pp: 1,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m655: {
    nombre: "Agujero Negro Aniquilador (Black hole eclipse  special)",
    tipo: "Siniestro",
    categoria: "Especial",
    potencia: 0,
    precision: 0,
    pp: 1,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m656: {
    nombre: "Arrumaco Sideral (Twinkle tackle  physical)",
    tipo: "Hada",
    categoria: "Físico",
    potencia: 0,
    precision: 0,
    pp: 1,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m657: {
    nombre: "Arrumaco Sideral (Twinkle tackle  special)",
    tipo: "Hada",
    categoria: "Especial",
    potencia: 0,
    precision: 0,
    pp: 1,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m658: {
    nombre: "Pikavoltio Letal (Catastropika)",
    tipo: "Eléctrico",
    categoria: "Físico",
    potencia: 210,
    precision: 0,
    pp: 1,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m659: {
    nombre: "Recogearena (Shore up)",
    tipo: "Tierra",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 5,
    descripcion: "Restaura la mitad de los PS máximos del usuario. Durante las tormentas de arena, restaura aún más PS."
  },
  m660: {
    nombre: "Escaramuza (First impression)",
    tipo: "Bicho",
    categoria: "Físico",
    potencia: 90,
    precision: 100,
    pp: 10,
    descripcion: "Movimiento de gran potencia que solo puede usarse en el turno en que el usuario sale al combate."
  },
  m661: {
    nombre: "Búnker (Baneful bunker)",
    tipo: "Veneno",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "Protege de los ataques y, al mismo tiempo, envenena al Pokémon que use un movimiento de contacto contra el usuario."
  },
  m662: {
    nombre: "Puntada Sombría (Spirit shackle)",
    tipo: "Fantasma",
    categoria: "Físico",
    potencia: 80,
    precision: 100,
    pp: 10,
    descripcion: "Ataca al oponente y, al mismo tiempo, fija su sombra al terreno para impedir su huida."
  },
  m663: {
    nombre: "Lariat Oscuro (Darkest lariat)",
    tipo: "Siniestro",
    categoria: "Físico",
    potencia: 85,
    precision: 100,
    pp: 10,
    descripcion: "Gira sobre sí mismo y golpea al oponente con ambos brazos. Ignora los cambios en las características del objetivo."
  },
  m664: {
    nombre: "Aria Burbuja (Sparkling aria)",
    tipo: "Sonido",
    categoria: "Especial",
    potencia: 90,
    precision: 100,
    pp: 10,
    descripcion: "Libera burbujas al cantar. Este movimiento cura las quemaduras de los Pokémon que reciban daño."
  },
  m665: {
    nombre: "Martillo Hielo (Ice hammer)",
    tipo: "Hielo",
    categoria: "Físico",
    potencia: 100,
    precision: 90,
    pp: 10,
    descripcion: "Un terrible puño golpea al contrincante, pero la Velocidad del usuario se ve reducida."
  },
  m666: {
    nombre: "Cura Floral (Floral healing)",
    tipo: "Hada",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "Restaura la mitad de los PS máximos del objetivo. Es más efectivo cuando se usa en conjunción con Campo de Hierba."
  },
  m667: {
    nombre: "Fuerza Equina (High horsepower)",
    tipo: "Tierra",
    categoria: "Físico",
    potencia: 95,
    precision: 95,
    pp: 10,
    descripcion: "Asesta un golpe devastador usando todo su cuerpo."
  },
  m668: {
    nombre: "Absorbefuerza (Strength sap)",
    tipo: "Planta",
    categoria: "Estado",
    potencia: 0,
    precision: 100,
    pp: 10,
    descripcion: "Restaura una cantidad de PS equivalente al valor de Ataque del rival, que además verá reducida esta característica."
  },
  m669: {
    nombre: "Cuchilla Solar (Solar blade)",
    tipo: "Planta",
    categoria: "Físico",
    potencia: 125,
    precision: 100,
    pp: 10,
    descripcion: "El usuario dedica un turno a absorber energía lumínica y concentrarla en forma de cuchilla con la que ataca al rival en el siguiente turno."
  },
  m670: {
    nombre: "Follaje (Leafage)",
    tipo: "Planta",
    categoria: "Físico",
    potencia: 40,
    precision: 100,
    pp: 40,
    descripcion: "Ataca al oponente lanzando hojas."
  },
  m671: {
    nombre: "Foco (Spotlight)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 15,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m672: {
    nombre: "Hilo Venenoso (Toxic thread)",
    tipo: "Veneno",
    categoria: "Estado",
    potencia: 0,
    precision: 100,
    pp: 20,
    descripcion: "Ataca al oponente con hilillos venenosos que reducen su Velocidad y lo envenenan."
  },
  m673: {
    nombre: "Aguzar (Laser focus)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 30,
    descripcion: "El usuario se concentra para que el siguiente ataque propine un golpe crítico."
  },
  m674: {
    nombre: "Piñón Auxiliar (Gear up)",
    tipo: "Acero",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 20,
    descripcion: "Cambia de marcha y logra aumentar el Ataque y el Ataque Especial de los Pokémon aliados que cuenten con las habilidades Más y Menos."
  },
  m675: {
    nombre: "Golpe Mordaza (Throat chop)",
    tipo: "Siniestro",
    categoria: "Físico",
    potencia: 80,
    precision: 100,
    pp: 15,
    descripcion: "Inflige al rival un dolor tan abrumador que le impide utilizar durante dos turnos ataques que se sirven del sonido."
  },
  m676: {
    nombre: "Bola de Polen (Pollen puff)",
    tipo: "Bicho",
    categoria: "Especial",
    potencia: 90,
    precision: 100,
    pp: 15,
    descripcion: "Ataca al oponente con una bola explosiva. Si esta alcanza a un aliado, le hará recuperar PS."
  },
  m677: {
    nombre: "Anclaje (Anchor shot)",
    tipo: "Acero",
    categoria: "Físico",
    potencia: 80,
    precision: 100,
    pp: 20,
    descripcion: "Ataca lanzando un ancla al oponente, que queda atrapado y no puede huir."
  },
  m678: {
    nombre: "Campo Psíquico (Psychic terrain)",
    tipo: "Psíquico",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "Durante cinco turnos, se potencian los movimientos de tipo Psíquico y los Pokémon que están en el suelo quedan protegidos contra movimientos con prioridad."
  },
  m679: {
    nombre: "Plancha (Lunge)",
    tipo: "Bicho",
    categoria: "Físico",
    potencia: 80,
    precision: 100,
    pp: 15,
    descripcion: "Ataca al oponente abalanzándose sobre él con todas sus fuerzas y reduce su Ataque."
  },
  m680: {
    nombre: "Látigo Ígneo (Fire lash)",
    tipo: "Fuego",
    categoria: "Físico",
    potencia: 80,
    precision: 100,
    pp: 15,
    descripcion: "Golpea al oponente con un látigo incandescente y reduce su Defensa."
  },
  m681: {
    nombre: "Chulería (Power trip)",
    tipo: "Siniestro",
    categoria: "Físico",
    potencia: 20,
    precision: 100,
    pp: 10,
    descripcion: "Ataca al oponente presumiendo de su fuerza. Cuanto más hayan subido las características del usuario, mayor será el daño."
  },
  m682: {
    nombre: "Llama Final (Burn up)",
    tipo: "Fuego",
    categoria: "Especial",
    potencia: 130,
    precision: 100,
    pp: 5,
    descripcion: "Utiliza hasta el último resquicio de llamas de su cuerpo para infligir un grave daño al oponente. Tras el ataque, el usuario deja de ser de tipo Fuego."
  },
  m683: {
    nombre: "Cambiavelocidad (Speed swap)",
    tipo: "Psíquico",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "Intercambia su Velocidad por la del oponente."
  },
  m684: {
    nombre: "Cuerno Certero (Smart strike)",
    tipo: "Acero",
    categoria: "Físico",
    potencia: 70,
    precision: 0,
    pp: 10,
    descripcion: "El usuario ensarta al adversario con su afilada cornamenta. Este movimiento acierta siempre."
  },
  m685: {
    nombre: "Purificación (Purify)",
    tipo: "Veneno",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 20,
    descripcion: "Cura los problemas de estado del Pokémon rival y a cambio recupera PS propios."
  },
  m686: {
    nombre: "Danza Despertar (Revelation dance)",
    tipo: "Normal",
    categoria: "Especial",
    potencia: 90,
    precision: 100,
    pp: 15,
    descripcion: "Ataque que consiste en un baile muy enérgico. El tipo de este ataque se corresponde con el del Pokémon que lo ejecuta."
  },
  m687: {
    nombre: "Núcleo Castigo (Core enforcer)",
    tipo: "Dragón",
    categoria: "Especial",
    potencia: 100,
    precision: 100,
    pp: 10,
    descripcion: "Inflige daño al rival, y si este ya ha hecho uso de algún movimiento, pierde su habilidad."
  },
  m688: {
    nombre: "Patada Tropical (Trop kick)",
    tipo: "Planta",
    categoria: "Físico",
    potencia: 70,
    precision: 100,
    pp: 15,
    descripcion: "Lanza una patada con la fuerza del trópico que golpea al rival y reduce su Ataque."
  },
  m689: {
    nombre: "Mandato (Instruct)",
    tipo: "Psíquico",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 15,
    descripcion: "Fuerza al objetivo a repetir inmediatamente su último movimiento."
  },
  m690: {
    nombre: "Pico Cañón (Beak blast)",
    tipo: "Volador",
    categoria: "Físico",
    potencia: 100,
    precision: 100,
    pp: 15,
    descripcion: "Primero aumenta la temperatura de su pico y luego ejecuta un ataque. Quema al rival si este le propina un ataque físico mientras está calentando el pico."
  },
  m691: {
    nombre: "Fragor Escamas (Clanging scales)",
    tipo: "Sonido",
    categoria: "Especial",
    potencia: 110,
    precision: 100,
    pp: 5,
    descripcion: "Frota todas las escamas de su cuerpo para crear un fuerte sonido con el que ataca. Cuando el ataque termina, su Defensa se ve reducida."
  },
  m692: {
    nombre: "Martillo Dragón (Dragon hammer)",
    tipo: "Dragón",
    categoria: "Físico",
    potencia: 90,
    precision: 100,
    pp: 15,
    descripcion: "Usa el cuerpo como un martillo para abalanzarse sobre su rival y causarle daño."
  },
  m693: {
    nombre: "Giro Vil (Brutal swing)",
    tipo: "Siniestro",
    categoria: "Físico",
    potencia: 60,
    precision: 100,
    pp: 20,
    descripcion: "Hace pivotar su cuerpo para causar daño a su alrededor."
  },
  m694: {
    nombre: "Velo Aurora (Aurora veil)",
    tipo: "Hielo",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 20,
    descripcion: "Reduce el daño de los ataques físicos y especiales que ejecuta el rival durante cinco turnos. Solo puede usarse cuando está granizando."
  },
  m695: {
    nombre: "Aluvión de Flechas Sombrías (Sinister arrow raid)",
    tipo: "Fantasma",
    categoria: "Físico",
    potencia: 180,
    precision: 0,
    pp: 1,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m696: {
    nombre: "Hiperplancha Oscura (Malicious moonsault)",
    tipo: "Siniestro",
    categoria: "Físico",
    potencia: 180,
    precision: 0,
    pp: 1,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m697: {
    nombre: "Sinfonía de la Diva Marina (Oceanic operetta)",
    tipo: "Agua",
    categoria: "Especial",
    potencia: 195,
    precision: 0,
    pp: 1,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m698: {
    nombre: "Cólera del Guardián (Guardian of alola)",
    tipo: "Hada",
    categoria: "Especial",
    potencia: 0,
    precision: 0,
    pp: 1,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m699: {
    nombre: "Constelación Robaalmas (Soul stealing 7 star strike)",
    tipo: "Fantasma",
    categoria: "Físico",
    potencia: 195,
    precision: 0,
    pp: 1,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m700: {
    nombre: "Surfeo Galvánico (Stoked sparksurfer)",
    tipo: "Eléctrico",
    categoria: "Especial",
    potencia: 175,
    precision: 0,
    pp: 1,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m701: {
    nombre: "Arrojo Intempestivo (Pulverizing pancake)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 210,
    precision: 0,
    pp: 1,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m702: {
    nombre: "Novena Potencia (Extreme evoboost)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 1,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m703: {
    nombre: "Supernova Original (Genesis supernova)",
    tipo: "Psíquico",
    categoria: "Especial",
    potencia: 185,
    precision: 0,
    pp: 1,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m704: {
    nombre: "Coraza Trampa (Shell trap)",
    tipo: "Fuego",
    categoria: "Especial",
    potencia: 150,
    precision: 100,
    pp: 5,
    descripcion: "El caparazón del Pokémon se convierte en una trampa. Si le alcanza un ataque físico, la trampa estalla y los oponentes sufren daño."
  },
  m705: {
    nombre: "Cañón Floral (Fleur cannon)",
    tipo: "Hada",
    categoria: "Especial",
    potencia: 130,
    precision: 90,
    pp: 5,
    descripcion: "El usuario emite un potente rayo, pero su Ataque Especial se reduce mucho."
  },
  m706: {
    nombre: "Psicocolmillo (Psychic fangs)",
    tipo: "Psíquico",
    categoria: "Físico",
    potencia: 85,
    precision: 100,
    pp: 10,
    descripcion: "Ataca a sus rivales con poderes psíquicos que además destruyen barreras como Pantalla de Luz y Reflejo."
  },
  m707: {
    nombre: "Pataleta (Stomping tantrum)",
    tipo: "Tierra",
    categoria: "Físico",
    potencia: 75,
    precision: 100,
    pp: 10,
    descripcion: "Usa la frustración como revulsivo para atacar. La potencia de Pataleta se duplica si el usuario ha fallado el último movimiento usado."
  },
  m708: {
    nombre: "Hueso Sombrío (Shadow bone)",
    tipo: "Fantasma",
    categoria: "Físico",
    potencia: 85,
    precision: 100,
    pp: 10,
    descripcion: "Ataca al oponente golpeándole con un hueso poseído por un espíritu. Puede reducir la Defensa del objetivo."
  },
  m709: {
    nombre: "Roca Veloz (Accelerock)",
    tipo: "Roca",
    categoria: "Físico",
    potencia: 40,
    precision: 100,
    pp: 20,
    descripcion: "El usuario se lanza contra el objetivo a gran velocidad. Este movimiento tiene prioridad alta."
  },
  m710: {
    nombre: "Hidroariete (Liquidation)",
    tipo: "Agua",
    categoria: "Físico",
    potencia: 85,
    precision: 100,
    pp: 10,
    descripcion: "Ataca golpeando gracias a la fuerza del agua. También puede reducir la Defensa del objetivo."
  },
  m711: {
    nombre: "Láser Prisma (Prismatic laser)",
    tipo: "Psíquico",
    categoria: "Especial",
    potencia: 160,
    precision: 100,
    pp: 10,
    descripcion: "El usuario utiliza un prisma para emitir un rayo de gran potencia, pero no puede moverse en el turno siguiente."
  },
  m712: {
    nombre: "Robasombra (Spectral thief)",
    tipo: "Fantasma",
    categoria: "Físico",
    potencia: 90,
    precision: 100,
    pp: 10,
    descripcion: "El usuario se esconde en la sombra del objetivo y lo ataca tras robarle las mejoras en sus características."
  },
  m713: {
    nombre: "Meteoimpacto (Sunsteel strike)",
    tipo: "Acero",
    categoria: "Físico",
    potencia: 100,
    precision: 100,
    pp: 5,
    descripcion: "Ataca al objetivo con la potencia de un meteoro, ignorando su habilidad."
  },
  m714: {
    nombre: "Rayo Umbrío (Moongeist beam)",
    tipo: "Fantasma",
    categoria: "Especial",
    potencia: 100,
    precision: 100,
    pp: 5,
    descripcion: "Ataca con un rayo misterioso que ignora la habilidad del objetivo."
  },
  m715: {
    nombre: "Ojos Llorosos (Tearful look)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 20,
    descripcion: "Mira al objetivo con ojos llorosos para hacerle perder su espíritu combativo y reduce su Ataque y Ataque Especial."
  },
  m716: {
    nombre: "Electropunzada (Zing zap)",
    tipo: "Eléctrico",
    categoria: "Físico",
    potencia: 80,
    precision: 100,
    pp: 10,
    descripcion: "Se lanza contra el objetivo y le suelta una potente descarga eléctrica que puede hacer que se amedrente."
  },
  m717: {
    nombre: "Furia Natural (Natures madness)",
    tipo: "Hada",
    categoria: "Especial",
    potencia: 0,
    precision: 90,
    pp: 10,
    descripcion: "Golpea al objetivo con la furia de la naturaleza y reduce sus PS a la mitad."
  },
  m718: {
    nombre: "Multiataque (Multi attack)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 120,
    precision: 100,
    pp: 10,
    descripcion: "El Pokémon se rodea de una potente energía con la que golpea al rival. El tipo del movimiento depende del disco que lleva el usuario."
  },
  m719: {
    nombre: "Gigarrayo Fulminante (10 000 000 volt thunderbolt)",
    tipo: "Eléctrico",
    categoria: "Especial",
    potencia: 195,
    precision: 0,
    pp: 1,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m720: {
    nombre: "Cabeza Sorpresa (Mind blown)",
    tipo: "Fuego",
    categoria: "Especial",
    potencia: 150,
    precision: 100,
    pp: 5,
    descripcion: "El usuario hace explotar su cabeza para atacar a todos los Pokémon que se hallan a su alrededor, aunque también se hiere a sí mismo."
  },
  m721: {
    nombre: "Puños Plasma (Plasma fists)",
    tipo: "Eléctrico",
    categoria: "Físico",
    potencia: 100,
    precision: 100,
    pp: 15,
    descripcion: "El usuario ataca con puños cargados de electricidad. Convierte los movimientos de tipo Normal en movimientos de tipo Eléctrico."
  },
  m722: {
    nombre: "Géiser Fotónico (Photon geyser)",
    tipo: "Psíquico",
    categoria: "Especial",
    potencia: 100,
    precision: 100,
    pp: 5,
    descripcion: "El usuario ataca con una gran columna de luz. Compara sus valores de Ataque y Ataque Especial para infligir daño con el más alto de los dos."
  },
  m723: {
    nombre: "Fotodestrucción Apocalíptica (Light that burns the sky)",
    tipo: "Psíquico",
    categoria: "Especial",
    potencia: 200,
    precision: 0,
    pp: 1,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m724: {
    nombre: "Embestida Solar (Searing sunraze smash)",
    tipo: "Acero",
    categoria: "Físico",
    potencia: 200,
    precision: 0,
    pp: 1,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m725: {
    nombre: "Deflagración Lunar (Menacing moonraze maelstrom)",
    tipo: "Fantasma",
    categoria: "Especial",
    potencia: 200,
    precision: 0,
    pp: 1,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m726: {
    nombre: "Somanta Amistosa (Lets snuggle forever)",
    tipo: "Hada",
    categoria: "Físico",
    potencia: 190,
    precision: 0,
    pp: 1,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m727: {
    nombre: "Tempestad Rocosa (Splintered stormshards)",
    tipo: "Roca",
    categoria: "Físico",
    potencia: 190,
    precision: 0,
    pp: 1,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m728: {
    nombre: "Estruendo Implacable (Clangorous soulblaze)",
    tipo: "Sonido",
    categoria: "Especial",
    potencia: 185,
    precision: 0,
    pp: 1,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m729: {
    nombre: "Pikaturbo (Zippy zap)",
    tipo: "Eléctrico",
    categoria: "Físico",
    potencia: 80,
    precision: 100,
    pp: 10,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m730: {
    nombre: "Salpikasurf (Splishy splash)",
    tipo: "Agua",
    categoria: "Especial",
    potencia: 90,
    precision: 100,
    pp: 15,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m731: {
    nombre: "Pikapicado (Floaty fall)",
    tipo: "Volador",
    categoria: "Físico",
    potencia: 90,
    precision: 95,
    pp: 15,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m732: {
    nombre: "Pikatormenta (Pika papow)",
    tipo: "Eléctrico",
    categoria: "Especial",
    potencia: 0,
    precision: 0,
    pp: 20,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m733: {
    nombre: "Vapodrenaje (Bouncy bubble)",
    tipo: "Agua",
    categoria: "Especial",
    potencia: 60,
    precision: 100,
    pp: 20,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m734: {
    nombre: "Joltioparálisis (Buzzy buzz)",
    tipo: "Eléctrico",
    categoria: "Especial",
    potencia: 60,
    precision: 100,
    pp: 20,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m735: {
    nombre: "Flarembestida (Sizzly slide)",
    tipo: "Fuego",
    categoria: "Físico",
    potencia: 60,
    precision: 100,
    pp: 20,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m736: {
    nombre: "Espeaura (Glitzy glow)",
    tipo: "Psíquico",
    categoria: "Especial",
    potencia: 80,
    precision: 95,
    pp: 15,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m737: {
    nombre: "Umbreozona (Baddy bad)",
    tipo: "Siniestro",
    categoria: "Especial",
    potencia: 80,
    precision: 95,
    pp: 15,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m738: {
    nombre: "Leafitobombas (Sappy seed)",
    tipo: "Planta",
    categoria: "Físico",
    potencia: 100,
    precision: 90,
    pp: 10,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m739: {
    nombre: "Glaceoprisma (Freezy frost)",
    tipo: "Hielo",
    categoria: "Especial",
    potencia: 100,
    precision: 90,
    pp: 10,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m740: {
    nombre: "Sylveotornado (Sparkly swirl)",
    tipo: "Hada",
    categoria: "Especial",
    potencia: 120,
    precision: 85,
    pp: 5,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m741: {
    nombre: "Eevimpacto (Veevee volley)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 0,
    precision: 0,
    pp: 20,
    descripcion: "Este movimiento no se puede usar, por lo que sería mejor olvidarlo, aunque eso implique que no se pueda recordar posteriormente."
  },
  m742: {
    nombre: "Ferropuño Doble (Double iron bash)",
    tipo: "Acero",
    categoria: "Físico",
    potencia: 60,
    precision: 100,
    pp: 5,
    descripcion: "Usando la tuerca del pecho como eje, gira sobre sí mismo y golpea con los brazos dos veces seguidas. Puede amedrentar al rival."
  },
  m743: {
    nombre: "Maxibarrera (Max guard)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "Frena todos los ataques, pero puede fallar si se usa repetidamente."
  },
  m744: {
    nombre: "Cañón Dinamax (Dynamax cannon)",
    tipo: "Dragón",
    categoria: "Especial",
    potencia: 100,
    precision: 100,
    pp: 5,
    descripcion: "El usuario ataca emitiendo un rayo desde su núcleo. El daño infligido se duplica si el objetivo ha alcanzado el estado Dinamax."
  },
  m745: {
    nombre: "Disparo Certero (Snipe shot)",
    tipo: "Agua",
    categoria: "Especial",
    potencia: 80,
    precision: 100,
    pp: 15,
    descripcion: "Permite atacar al objetivo seleccionado ignorando las habilidades o movimientos que permiten a un rival centrar la atención sobre sí."
  },
  m746: {
    nombre: "Presa Maxilar (Jaw lock)",
    tipo: "Siniestro",
    categoria: "Físico",
    potencia: 80,
    precision: 100,
    pp: 10,
    descripcion: "Impide que tanto el atacante como el defensor puedan ser intercambiados hasta que uno de ellos se debilite o abandone el terreno de combate."
  },
  m747: {
    nombre: "Atiborramiento (Stuff cheeks)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "El usuario ingiere la baya que lleva equipada para aumentar mucho su Defensa."
  },
  m748: {
    nombre: "Bastión Final (No retreat)",
    tipo: "Lucha",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 5,
    descripcion: "El usuario aumenta todas sus características, pero ya no puede huir ni ser cambiado por otro."
  },
  m749: {
    nombre: "Alquitranazo (Tar shot)",
    tipo: "Roca",
    categoria: "Estado",
    potencia: 0,
    precision: 100,
    pp: 15,
    descripcion: "Cubre al objetivo de un alquitrán pegajoso que reduce su Velocidad y lo vuelve débil contra el fuego."
  },
  m750: {
    nombre: "Polvo Mágico (Magic powder)",
    tipo: "Psíquico",
    categoria: "Estado",
    potencia: 0,
    precision: 100,
    pp: 20,
    descripcion: "Cubre al objetivo con unos polvos mágicos que le hacen adquirir el tipo Psíquico."
  },
  m751: {
    nombre: "Dracoflechas (Dragon darts)",
    tipo: "Dragón",
    categoria: "Físico",
    potencia: 50,
    precision: 100,
    pp: 10,
    descripcion: "El usuario ataca propulsando a ambos Dreepy. En caso de haber dos adversarios, cada Dreepy golpea a su propio objetivo por separado."
  },
  m752: {
    nombre: "Hora del Té (Teatime)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "El usuario invita a tomar el té a todos los presentes en el terreno de combate, lo que hace que ingieran las bayas que lleven equipadas."
  },
  m753: {
    nombre: "Octopresa (Octolock)",
    tipo: "Lucha",
    categoria: "Estado",
    potencia: 0,
    precision: 100,
    pp: 15,
    descripcion: "Retiene al objetivo para impedir su huida, a la vez que reduce su Defensa y Defensa Especial cada turno."
  },
  m754: {
    nombre: "Electropico (Bolt beak)",
    tipo: "Eléctrico",
    categoria: "Físico",
    potencia: 85,
    precision: 100,
    pp: 10,
    descripcion: "El usuario ensarta al objetivo con su pico cargado de electricidad. Si ataca en primer lugar, la potencia del movimiento se duplica."
  },
  m755: {
    nombre: "Branquibocado (Fishious rend)",
    tipo: "Agua",
    categoria: "Físico",
    potencia: 85,
    precision: 100,
    pp: 10,
    descripcion: "El usuario agarra al objetivo con sus duras branquias. En caso de atacar antes que este último, la potencia del movimiento se duplica."
  },
  m756: {
    nombre: "Cambio de Cancha (Court change)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 100,
    pp: 10,
    descripcion: "Extraño poder que intercambia los efectos en el terreno de combate de ambos bandos."
  },
  m757: {
    nombre: "Maxignición (Max flare)",
    tipo: "Fuego",
    categoria: "Físico",
    potencia: 100,
    precision: 0,
    pp: 10,
    descripcion: "Ataque de tipo Fuego ejecutado por un Pokémon Dinamax. Hace que se intensifique el efecto del sol durante cinco turnos."
  },
  m758: {
    nombre: "Maxinsecto (Max flutterby)",
    tipo: "Bicho",
    categoria: "Físico",
    potencia: 10,
    precision: 0,
    pp: 10,
    descripcion: "Ataque de tipo Bicho ejecutado por un Pokémon Dinamax. Reduce el Ataque Especial del objetivo."
  },
  m759: {
    nombre: "Maxitormenta (Max lightning)",
    tipo: "Eléctrico",
    categoria: "Físico",
    potencia: 10,
    precision: 0,
    pp: 10,
    descripcion: "Ataque de tipo Eléctrico ejecutado por un Pokémon Dinamax. Crea un campo eléctrico durante cinco turnos."
  },
  m760: {
    nombre: "Maxiataque (Max strike)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 10,
    precision: 0,
    pp: 10,
    descripcion: "Ataque de tipo Normal ejecutado por un Pokémon Dinamax. Reduce la Velocidad del objetivo."
  },
  m761: {
    nombre: "Maxipuño (Max knuckle)",
    tipo: "Lucha",
    categoria: "Físico",
    potencia: 10,
    precision: 0,
    pp: 10,
    descripcion: "Ataque de tipo Lucha ejecutado por un Pokémon Dinamax. Aumenta el Ataque de tu bando."
  },
  m762: {
    nombre: "Maxiespectro (Max phantasm)",
    tipo: "Fantasma",
    categoria: "Físico",
    potencia: 10,
    precision: 0,
    pp: 10,
    descripcion: "Ataque de tipo Fantasma ejecutado por un Pokémon Dinamax. Reduce la Defensa de los rivales."
  },
  m763: {
    nombre: "Maxihelada (Max hailstorm)",
    tipo: "Hielo",
    categoria: "Físico",
    potencia: 10,
    precision: 0,
    pp: 10,
    descripcion: "Ataque de tipo Hielo ejecutado por un Pokémon Dinamax. Crea una tormenta de granizo que dura cinco turnos."
  },
  m764: {
    nombre: "Maxiácido (Max ooze)",
    tipo: "Veneno",
    categoria: "Físico",
    potencia: 10,
    precision: 0,
    pp: 10,
    descripcion: "Ataque de tipo Veneno ejecutado por un Pokémon Dinamax. Aumenta el Ataque Especial de tu bando."
  },
  m765: {
    nombre: "Maxichorro (Max geyser)",
    tipo: "Agua",
    categoria: "Físico",
    potencia: 10,
    precision: 0,
    pp: 10,
    descripcion: "Ataque de tipo Agua ejecutado por un Pokémon Dinamax. Desata un aguacero que dura cinco turnos."
  },
  m766: {
    nombre: "Maxiciclón (Max airstream)",
    tipo: "Volador",
    categoria: "Físico",
    potencia: 10,
    precision: 0,
    pp: 10,
    descripcion: "Ataque de tipo Volador ejecutado por un Pokémon Dinamax. Aumenta la Velocidad de tu bando."
  },
  m767: {
    nombre: "Maxiestela (Max starfall)",
    tipo: "Hada",
    categoria: "Físico",
    potencia: 10,
    precision: 0,
    pp: 10,
    descripcion: "Ataque de tipo Hada ejecutado por un Pokémon Dinamax. Crea un campo de niebla durante cinco turnos."
  },
  m768: {
    nombre: "Maxidraco (Max wyrmwind)",
    tipo: "Dragón",
    categoria: "Físico",
    potencia: 10,
    precision: 0,
    pp: 10,
    descripcion: "Ataque de tipo Dragón ejecutado por un Pokémon Dinamax. Reduce el Ataque del objetivo."
  },
  m769: {
    nombre: "Maxionda (Max mindstorm)",
    tipo: "Psíquico",
    categoria: "Físico",
    potencia: 10,
    precision: 0,
    pp: 10,
    descripcion: "Ataque de tipo Psíquico ejecutado por un Pokémon Dinamax. Crea un campo psíquico durante cinco turnos."
  },
  m770: {
    nombre: "Maxilito (Max rockfall)",
    tipo: "Roca",
    categoria: "Físico",
    potencia: 10,
    precision: 0,
    pp: 10,
    descripcion: "Ataque de tipo Roca ejecutado por un Pokémon Dinamax. Levanta una tormenta de arena que dura cinco turnos."
  },
  m771: {
    nombre: "Maxitemblor (Max quake)",
    tipo: "Tierra",
    categoria: "Físico",
    potencia: 10,
    precision: 0,
    pp: 10,
    descripcion: "Ataque de tipo Tierra ejecutado por un Pokémon Dinamax. Aumenta la Defensa Especial de tu bando."
  },
  m772: {
    nombre: "Maxisombra (Max darkness)",
    tipo: "Siniestro",
    categoria: "Físico",
    potencia: 10,
    precision: 0,
    pp: 10,
    descripcion: "Ataque de tipo Siniestro ejecutado por un Pokémon Dinamax. Reduce la Defensa Especial del objetivo."
  },
  m773: {
    nombre: "Maxiflora (Max overgrowth)",
    tipo: "Planta",
    categoria: "Físico",
    potencia: 10,
    precision: 0,
    pp: 10,
    descripcion: "Ataque de tipo Planta ejecutado por un Pokémon Dinamax. Crea un campo de hierba durante cinco turnos."
  },
  m774: {
    nombre: "Maximetal (Max steelspike)",
    tipo: "Acero",
    categoria: "Físico",
    potencia: 10,
    precision: 0,
    pp: 10,
    descripcion: "Ataque de tipo Acero ejecutado por un Pokémon Dinamax. Aumenta la Defensa de tu bando."
  },
  m775: {
    nombre: "Estruendo Escama (Clangorous soul)",
    tipo: "Sonido",
    categoria: "Estado",
    potencia: 0,
    precision: 100,
    pp: 5,
    descripcion: "Utiliza parte de los PS propios para subir sus características."
  },
  m776: {
    nombre: "Plancha Corporal (Body press)",
    tipo: "Lucha",
    categoria: "Físico",
    potencia: 80,
    precision: 100,
    pp: 10,
    descripcion: "El usuario usa el cuerpo para lanzar su ataque e infligir un daño directamente proporcional a su Defensa."
  },
  m777: {
    nombre: "Decoración (Decorate)",
    tipo: "Hada",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 15,
    descripcion: "Aumenta mucho el Ataque y el Ataque Especial del objetivo al decorarlo."
  },
  m778: {
    nombre: "Batería Asalto (Drum beating)",
    tipo: "Planta",
    categoria: "Físico",
    potencia: 80,
    precision: 100,
    pp: 10,
    descripcion: "El usuario controla un tocón mediante la percusión y al atacar reduce la Velocidad del objetivo."
  },
  m779: {
    nombre: "Cepo (Snap trap)",
    tipo: "Planta",
    categoria: "Físico",
    potencia: 35,
    precision: 100,
    pp: 15,
    descripcion: "Cepo que atrapa al objetivo durante cuatro o cinco turnos y le causa daño mientras se encuentra preso."
  },
  m780: {
    nombre: "Balón Ígneo (Pyro ball)",
    tipo: "Fuego",
    categoria: "Físico",
    potencia: 120,
    precision: 90,
    pp: 5,
    descripcion: "El usuario prende una pequeña piedra para crear una bola de fuego con la que ataca al rival. Puede causar quemaduras."
  },
  m781: {
    nombre: "Tajo Supremo (Behemoth blade)",
    tipo: "Acero",
    categoria: "Físico",
    potencia: 100,
    precision: 100,
    pp: 5,
    descripcion: "El usuario se convierte en una espada gigante para rebanar al objetivo. Si este ha alcanzado el estado Dinamax, se duplica el daño infligido."
  },
  m782: {
    nombre: "Embate Supremo (Behemoth bash)",
    tipo: "Acero",
    categoria: "Físico",
    potencia: 100,
    precision: 100,
    pp: 5,
    descripcion: "El usuario se convierte en un escudo gigante para golpear al objetivo. Si este ha alcanzado el estado Dinamax, se duplica el daño infligido."
  },
  m783: {
    nombre: "Rueda Aural (Aura wheel)",
    tipo: "Eléctrico",
    categoria: "Físico",
    potencia: 110,
    precision: 100,
    pp: 10,
    descripcion: "La energía que acumula en las mejillas le sirve para atacar y aumentar su Velocidad. Este movimiento cambia de tipo según la forma que adopte Morpeko."
  },
  m784: {
    nombre: "Vasto Impacto (Breaking swipe)",
    tipo: "Dragón",
    categoria: "Físico",
    potencia: 60,
    precision: 100,
    pp: 15,
    descripcion: "El usuario sacude violentamente su enorme cola para golpear a todos los rivales y reducir su Ataque a la par."
  },
  m785: {
    nombre: "Punzada Rama (Branch poke)",
    tipo: "Planta",
    categoria: "Físico",
    potencia: 40,
    precision: 100,
    pp: 40,
    descripcion: "Ataca pinchando al objetivo con una rama afilada."
  },
  m786: {
    nombre: "Amplificador (Overdrive)",
    tipo: "Sonido",
    categoria: "Especial",
    potencia: 80,
    precision: 100,
    pp: 10,
    descripcion: "El usuario rasguea la guitarra o el bajo para generar enormes vibraciones de intensa reverberación con las que ataca al objetivo."
  },
  m787: {
    nombre: "Ácido Málico (Apple acid)",
    tipo: "Planta",
    categoria: "Especial",
    potencia: 80,
    precision: 100,
    pp: 10,
    descripcion: "Ataca al objetivo con el fluido corrosivo que desprende una manzana ácida, lo que también disminuye la Defensa Especial de este."
  },
  m788: {
    nombre: "Fuerza G (Grav apple)",
    tipo: "Planta",
    categoria: "Físico",
    potencia: 80,
    precision: 100,
    pp: 10,
    descripcion: "El usuario ataca haciendo caer una manzana desde gran altura. Disminuye la Defensa del objetivo."
  },
  m789: {
    nombre: "Choque Anímico (Spirit break)",
    tipo: "Hada",
    categoria: "Físico",
    potencia: 75,
    precision: 100,
    pp: 15,
    descripcion: "El usuario ataca al objetivo con tal ímpetu que acaba minando su moral y, en consecuencia, reduce su Ataque Especial."
  },
  m790: {
    nombre: "Cautivapor (Strange steam)",
    tipo: "Hada",
    categoria: "Especial",
    potencia: 90,
    precision: 95,
    pp: 10,
    descripcion: "Desprende un humo con el que ataca al objetivo, que puede acabar confundido."
  },
  m791: {
    nombre: "Gota Vital (Life dew)",
    tipo: "Agua",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "Vierte un agua misteriosa y balsámica que restaura tanto sus propios PS como los de aquellos aliados presentes en el terreno de combate."
  },
  m792: {
    nombre: "Obstrucción (Obstruct)",
    tipo: "Siniestro",
    categoria: "Estado",
    potencia: 0,
    precision: 100,
    pp: 10,
    descripcion: "Frena todos los ataques, pero puede fallar si se usa repetidamente. Reduce mucho la Defensa de quien ejecute un movimiento de contacto contra el usuario."
  },
  m793: {
    nombre: "Irreverencia (False surrender)",
    tipo: "Siniestro",
    categoria: "Físico",
    potencia: 80,
    precision: 0,
    pp: 10,
    descripcion: "El usuario finge hacer una reverencia y aprovecha la ocasión para ensartar al objetivo con su cabello alborotado. Siempre acierta."
  },
  m794: {
    nombre: "Asalto Estelar (Meteor assault)",
    tipo: "Lucha",
    categoria: "Físico",
    potencia: 150,
    precision: 100,
    pp: 5,
    descripcion: "El usuario agita violentamente su grueso puerro para atacar, pero el mareo que le provocan las sacudidas le impide moverse en el turno siguiente."
  },
  m795: {
    nombre: "Rayo Infinito (Eternabeam)",
    tipo: "Dragón",
    categoria: "Especial",
    potencia: 160,
    precision: 90,
    pp: 5,
    descripcion: "Este es el mayor ataque de Eternatus una vez adquirida su forma original. No puede moverse en el turno siguiente."
  },
  m796: {
    nombre: "Metaláser (Steel beam)",
    tipo: "Acero",
    categoria: "Especial",
    potencia: 140,
    precision: 95,
    pp: 5,
    descripcion: "Utiliza el acero de su cuerpo para disparar un potente rayo. También hiere al agresor."
  },
  m797: {
    nombre: "Vasta Fuerza (Expanding force)",
    tipo: "Psíquico",
    categoria: "Especial",
    potencia: 80,
    precision: 100,
    pp: 10,
    descripcion: "El usuario ataca al objetivo con sus poderes psíquicos. Cuando se usa en conjunción con un campo psíquico, aumenta su potencia e inflige daño a todos los rivales."
  },
  m798: {
    nombre: "Allanador Férreo (Steel roller)",
    tipo: "Acero",
    categoria: "Físico",
    potencia: 130,
    precision: 100,
    pp: 5,
    descripcion: "El usuario lanza su ataque y destruye el campo activo en el terreno de combate, y falla si no hay ninguno en ese momento."
  },
  m799: {
    nombre: "Ráfaga Escamas (Scale shot)",
    tipo: "Dragón",
    categoria: "Físico",
    potencia: 25,
    precision: 90,
    pp: 20,
    descripcion: "Lanza escamas al objetivo de dos a cinco veces seguidas. Aumenta la Velocidad del usuario, pero reduce su Defensa."
  },
  m800: {
    nombre: "Rayo Meteórico (Meteor beam)",
    tipo: "Roca",
    categoria: "Especial",
    potencia: 120,
    precision: 90,
    pp: 10,
    descripcion: "El usuario dedica el primer turno a aumentar su Ataque Especial acumulando energía cósmica y lanza su ofensiva contra el objetivo en el segundo."
  },
  m801: {
    nombre: "Moluscañón (Shell side arm)",
    tipo: "Veneno",
    categoria: "Especial",
    potencia: 90,
    precision: 100,
    pp: 10,
    descripcion: "El usuario lanza un ataque físico o especial en función de cuál inflija más daño. Puede envenenar al objetivo."
  },
  m802: {
    nombre: "Bruma Explosiva (Misty explosion)",
    tipo: "Hada",
    categoria: "Especial",
    potencia: 100,
    precision: 100,
    pp: 5,
    descripcion: "El usuario ataca a todos a su alrededor, pero se debilita de inmediato. La potencia del movimiento aumenta si el terreno está cubierto por un campo de niebla."
  },
  m803: {
    nombre: "Fitoimpulso (Grassy glide)",
    tipo: "Planta",
    categoria: "Físico",
    potencia: 55,
    precision: 100,
    pp: 20,
    descripcion: "Ataca al objetivo deslizándose sobre el terreno de combate. Este movimiento tiene prioridad alta cuando el terreno está cubierto por un campo de hierba."
  },
  m804: {
    nombre: "Alto Voltaje (Rising voltage)",
    tipo: "Eléctrico",
    categoria: "Especial",
    potencia: 70,
    precision: 100,
    pp: 20,
    descripcion: "Ataca con una descarga eléctrica que surge del terreno de combate. La potencia del movimiento se duplica si el rival se ve afectado por un campo eléctrico."
  },
  m805: {
    nombre: "Pulso de Campo (Terrain pulse)",
    tipo: "Normal",
    categoria: "Especial",
    potencia: 50,
    precision: 100,
    pp: 10,
    descripcion: "El usuario ataca aprovechando la energía del campo activo, que determina tanto el tipo como la potencia del movimiento."
  },
  m806: {
    nombre: "Golpe Rastrero (Skitter smack)",
    tipo: "Bicho",
    categoria: "Físico",
    potencia: 70,
    precision: 90,
    pp: 10,
    descripcion: "Ataca al objetivo por la espalda de forma subrepticia y además reduce su Ataque Especial."
  },
  m807: {
    nombre: "Envidia Ardiente (Burning jealousy)",
    tipo: "Sonido",
    categoria: "Especial",
    potencia: 70,
    precision: 100,
    pp: 5,
    descripcion: "Ataca al objetivo con la energía generada por la envidia y causa quemaduras a los Pokémon cuyas características hayan aumentado en ese turno."
  },
  m808: {
    nombre: "Desahogo (Lash out)",
    tipo: "Siniestro",
    categoria: "Físico",
    potencia: 75,
    precision: 100,
    pp: 5,
    descripcion: "Ataca al rival presa de la rabia. Si el usuario ha sufrido una reducción de características en ese turno, la potencia del movimiento se duplica."
  },
  m809: {
    nombre: "Poltergeist (Poltergeist)",
    tipo: "Fantasma",
    categoria: "Físico",
    potencia: 110,
    precision: 90,
    pp: 5,
    descripcion: "El usuario ataca utilizando el objeto que lleva el rival. Si no tiene ninguno equipado, el movimiento falla."
  },
  m810: {
    nombre: "Gas Corrosivo (Corrosive gas)",
    tipo: "Veneno",
    categoria: "Estado",
    potencia: 0,
    precision: 100,
    pp: 40,
    descripcion: "El usuario libera un gas cáustico que envuelve a todos los que se encuentren alrededor y derrite por completo los objetos que lleven equipados."
  },
  m811: {
    nombre: "Motivación (Coaching)",
    tipo: "Lucha",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "El usuario imparte indicaciones precisas a sus aliados, que ven aumentados su Ataque y su Defensa."
  },
  m812: {
    nombre: "Viraje (Flip turn)",
    tipo: "Agua",
    categoria: "Físico",
    potencia: 60,
    precision: 100,
    pp: 20,
    descripcion: "Tras atacar, el usuario da paso a toda prisa a otro Pokémon del equipo."
  },
  m813: {
    nombre: "Triple Axel (Triple axel)",
    tipo: "Hielo",
    categoria: "Físico",
    potencia: 20,
    precision: 90,
    pp: 10,
    descripcion: "Patea hasta tres veces seguidas y cada vez más fuerte."
  },
  m814: {
    nombre: "Ala Bis (Dual wingbeat)",
    tipo: "Volador",
    categoria: "Físico",
    potencia: 40,
    precision: 90,
    pp: 10,
    descripcion: "Ataca al adversario golpeándolo dos veces con las alas."
  },
  m815: {
    nombre: "Arenas Ardientes (Scorching sands)",
    tipo: "Tierra",
    categoria: "Especial",
    potencia: 70,
    precision: 100,
    pp: 10,
    descripcion: "Ataca al objetivo arrojándole arena a temperaturas muy elevadas. Puede causar quemaduras."
  },
  m816: {
    nombre: "Cura Selvática (Jungle healing)",
    tipo: "Planta",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "Al entrar en plena armonía con la selva, el usuario cura problemas de estado y restaura PS no solo de sí mismo, sino también de los aliados presentes en el terreno."
  },
  m817: {
    nombre: "Golpe Oscuro (Wicked blow)",
    tipo: "Siniestro",
    categoria: "Físico",
    potencia: 75,
    precision: 100,
    pp: 5,
    descripcion: "Golpe devastador que requiere un absoluto dominio de las artes siniestras. Siempre asesta un golpe crítico."
  },
  m818: {
    nombre: "Azote Torrencial (Surging strikes)",
    tipo: "Agua",
    categoria: "Físico",
    potencia: 25,
    precision: 100,
    pp: 5,
    descripcion: "El usuario, dominador absoluto del líquido elemento, golpea hasta tres veces con movimientos fluidos. Siempre asesta un golpe crítico."
  },
  m819: {
    nombre: "Electrojaula (Thunder cage)",
    tipo: "Eléctrico",
    categoria: "Especial",
    potencia: 80,
    precision: 90,
    pp: 15,
    descripcion: "El objetivo queda atrapado en una jaula electrificada que permanece en el terreno de cuatro a cinco turnos."
  },
  m820: {
    nombre: "Dracoenergía (Dragon energy)",
    tipo: "Dragón",
    categoria: "Especial",
    potencia: 150,
    precision: 100,
    pp: 5,
    descripcion: "El usuario convierte su fuerza vital en una energía con la que ataca al objetivo. Cuantos menos PS tenga el usuario, menor será la potencia del movimiento."
  },
  m821: {
    nombre: "Mirada Heladora (Freezing glare)",
    tipo: "Psíquico",
    categoria: "Especial",
    potencia: 90,
    precision: 100,
    pp: 10,
    descripcion: "A través de sus ojos emite poderes psíquicos con los que ataca al objetivo, al que puede llegar a congelar."
  },
  m822: {
    nombre: "Furia Candente (Fiery wrath)",
    tipo: "Siniestro",
    categoria: "Especial",
    potencia: 90,
    precision: 100,
    pp: 10,
    descripcion: "El usuario convierte su ira en un aura flamígera para lanzar su ataque. Puede amedrentar al objetivo."
  },
  m823: {
    nombre: "Patada Relámpago (Thunderous kick)",
    tipo: "Lucha",
    categoria: "Físico",
    potencia: 90,
    precision: 100,
    pp: 10,
    descripcion: "El usuario desconcierta al rival con movimientos centelleantes y le propina una patada. Baja la Defensa del objetivo."
  },
  m824: {
    nombre: "Lanza Glacial (Glacial lance)",
    tipo: "Hielo",
    categoria: "Físico",
    potencia: 120,
    precision: 100,
    pp: 5,
    descripcion: "El usuario ataca al objetivo lanzándole un carámbano de hielo envuelto en una ventisca."
  },
  m825: {
    nombre: "Orbes Espectro (Astral barrage)",
    tipo: "Fantasma",
    categoria: "Especial",
    potencia: 120,
    precision: 100,
    pp: 5,
    descripcion: "El usuario ataca al objetivo lanzándole una ingente cantidad de pequeños fantasmas."
  },
  m826: {
    nombre: "Conjuro Funesto (Eerie spell)",
    tipo: "Sonido",
    categoria: "Especial",
    potencia: 80,
    precision: 100,
    pp: 5,
    descripcion: "El usuario ataca con un poder psíquico de inmensa potencia y elimina 3 PP del último movimiento que haya usado el objetivo."
  },
  m827: {
    nombre: "Dire claw (Dire claw)",
    tipo: "Veneno",
    categoria: "Físico",
    potencia: 80,
    precision: 100,
    pp: 15,
    descripcion: "The user lashes out at the target with ruinous claws. This may also leave the target poisoned, paralyzed, or asleep."
  },
  m828: {
    nombre: "Psyshield bash (Psyshield bash)",
    tipo: "Psíquico",
    categoria: "Físico",
    potencia: 70,
    precision: 90,
    pp: 10,
    descripcion: "Cloaking itself in psychic energy, the user slams into the target. This also boosts the user’s Defense stat."
  },
  m829: {
    nombre: "Power shift (Power shift)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: ""
  },
  m830: {
    nombre: "Stone axe (Stone axe)",
    tipo: "Roca",
    categoria: "Físico",
    potencia: 65,
    precision: 90,
    pp: 15,
    descripcion: "The user swings its stone axes at the target. Stone splinters left behind by this attack float around the target."
  },
  m831: {
    nombre: "Springtide storm (Springtide storm)",
    tipo: "Hada",
    categoria: "Especial",
    potencia: 100,
    precision: 80,
    pp: 5,
    descripcion: "The user attacks by wrapping opposing Pokémon in fierce winds brimming with love and hate. This may also lower their Attack stats."
  },
  m832: {
    nombre: "Mystical power (Mystical power)",
    tipo: "Psíquico",
    categoria: "Especial",
    potencia: 70,
    precision: 90,
    pp: 10,
    descripcion: "The user attacks by emitting a mysterious power. This also boosts the user’s Sp. Atk stat."
  },
  m833: {
    nombre: "Raging fury (Raging fury)",
    tipo: "Fuego",
    categoria: "Físico",
    potencia: 120,
    precision: 100,
    pp: 10,
    descripcion: "The user rampages around spewing flames for two to three turns. The user then becomes confused."
  },
  m834: {
    nombre: "Wave crash (Wave crash)",
    tipo: "Agua",
    categoria: "Físico",
    potencia: 120,
    precision: 100,
    pp: 10,
    descripcion: "The user shrouds itself in water and slams into the target with its whole body to inflict damage. This also damages the user quite a lot."
  },
  m835: {
    nombre: "Chloroblast (Chloroblast)",
    tipo: "Planta",
    categoria: "Especial",
    potencia: 150,
    precision: 95,
    pp: 5,
    descripcion: "The user launches its amassed chlorophyll to inflict damage on the target. This also damages the user."
  },
  m836: {
    nombre: "Mountain gale (Mountain gale)",
    tipo: "Hielo",
    categoria: "Físico",
    potencia: 100,
    precision: 85,
    pp: 10,
    descripcion: "The user hurls giant chunks of ice at the target to inflict damage. This may also make the target flinch."
  },
  m837: {
    nombre: "Victory dance (Victory dance)",
    tipo: "Lucha",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "The user performs an intense dance to usher in victory, boosting its Attack, Defense, and Speed stats."
  },
  m838: {
    nombre: "Headlong rush (Headlong rush)",
    tipo: "Tierra",
    categoria: "Físico",
    potencia: 120,
    precision: 100,
    pp: 5,
    descripcion: "The user smashes into the target in a full-body tackle. This also lowers the user’s Defense and Sp. Def stats."
  },
  m839: {
    nombre: "Barb barrage (Barb barrage)",
    tipo: "Veneno",
    categoria: "Físico",
    potencia: 60,
    precision: 100,
    pp: 10,
    descripcion: "The user launches countless toxic barbs to inflict damage. This may also poison the target. This move’s power is doubled if the target is already poisoned."
  },
  m840: {
    nombre: "Esper wing (Esper wing)",
    tipo: "Psíquico",
    categoria: "Especial",
    potencia: 80,
    precision: 100,
    pp: 10,
    descripcion: "The user slashes the target with aura-enriched wings. This also boosts the user's Speed stat. This move has a heightened chance of landing a critical hit."
  },
  m841: {
    nombre: "Bitter malice (Bitter malice)",
    tipo: "Fantasma",
    categoria: "Especial",
    potencia: 75,
    precision: 100,
    pp: 10,
    descripcion: "The user attacks the target with spine-chilling resentment. This also lowers the target’s Attack stat."
  },
  m842: {
    nombre: "Shelter (Shelter)",
    tipo: "Acero",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "The user makes its skin as hard as an iron shield, sharply boosting its Defense stat."
  },
  m843: {
    nombre: "Triple arrows (Triple arrows)",
    tipo: "Lucha",
    categoria: "Físico",
    potencia: 90,
    precision: 100,
    pp: 10,
    descripcion: "The user kicks, then fires three arrows. This move has a heightened chance of landing a critical hit and may also lower the target’s Defense stat or make it flinch."
  },
  m844: {
    nombre: "Infernal parade (Infernal parade)",
    tipo: "Fantasma",
    categoria: "Especial",
    potencia: 60,
    precision: 100,
    pp: 15,
    descripcion: "The user attacks with myriad fireballs. This may also leave the target with a burn. This move's power is doubled if the target has a status condition."
  },
  m845: {
    nombre: "Ceaseless edge (Ceaseless edge)",
    tipo: "Siniestro",
    categoria: "Físico",
    potencia: 65,
    precision: 90,
    pp: 15,
    descripcion: "The user slashes its shell blade at the target. Shell splinters left behind by this attack remain scattered under the target as spikes."
  },
  m846: {
    nombre: "Bleakwind storm (Bleakwind storm)",
    tipo: "Volador",
    categoria: "Especial",
    potencia: 100,
    precision: 80,
    pp: 10,
    descripcion: "The user attacks with savagely cold winds that cause both body and spirit to tremble. This may also lower the Speed stats of opposing Pokémon."
  },
  m847: {
    nombre: "Wildbolt storm (Wildbolt storm)",
    tipo: "Eléctrico",
    categoria: "Especial",
    potencia: 100,
    precision: 80,
    pp: 10,
    descripcion: "The user summons a thunderous tempest and savagely attacks with lightning and wind. This may also leave opposing Pokémon with paralysis."
  },
  m848: {
    nombre: "Sandsear storm (Sandsear storm)",
    tipo: "Tierra",
    categoria: "Especial",
    potencia: 100,
    precision: 80,
    pp: 10,
    descripcion: "The user attacks by wrapping opposing Pokémon in fierce winds and searingly hot sand. This may also leave them with a burn."
  },
  m849: {
    nombre: "Lunar blessing (Lunar blessing)",
    tipo: "Psíquico",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 5,
    descripcion: "The user receives a blessing from the crescent moon, restoring HP and curing status conditions for itself and its ally Pokémon currently in the battle."
  },
  m850: {
    nombre: "Take heart (Take heart)",
    tipo: "Psíquico",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "The user lifts its spirits, curing its own status conditions and boosting its Sp. Atk and Sp. Def stats."
  },
  m851: {
    nombre: "Tera blast (Tera blast)",
    tipo: "Normal",
    categoria: "Especial",
    potencia: 80,
    precision: 100,
    pp: 10,
    descripcion: "If the user has Terastallized, it unleashes energy of its Tera Type. This move inflicts damage using the Attack or Sp. Atk stat—whichever is higher for the user."
  },
  m852: {
    nombre: "Silk trap (Silk trap)",
    tipo: "Bicho",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "The user spins a silken trap, protecting itself from damage while lowering the Speed stat of any attacker that makes direct contact."
  },
  m853: {
    nombre: "Axe kick (Axe kick)",
    tipo: "Lucha",
    categoria: "Físico",
    potencia: 120,
    precision: 90,
    pp: 10,
    descripcion: "The user attacks by kicking up into the air and slamming its heel down upon the target. This may also confuse the target. If it misses, the user takes damage instead."
  },
  m854: {
    nombre: "Last respects (Last respects)",
    tipo: "Fantasma",
    categoria: "Físico",
    potencia: 50,
    precision: 100,
    pp: 10,
    descripcion: "The user attacks to avenge its allies. The more defeated allies there are in the user's party, the greater the move's power."
  },
  m855: {
    nombre: "Lumina crash (Lumina crash)",
    tipo: "Psíquico",
    categoria: "Especial",
    potencia: 80,
    precision: 100,
    pp: 10,
    descripcion: "The user attacks by unleashing a peculiar light that even affects the mind. This also harshly lowers the target's Sp. Def stat."
  },
  m856: {
    nombre: "Order up (Order up)",
    tipo: "Dragón",
    categoria: "Físico",
    potencia: 80,
    precision: 100,
    pp: 10,
    descripcion: "The user attacks with elegant poise. If the user has a Tatsugiri in its mouth, this move boosts one of the user's stats based on the Tatsugiri's form."
  },
  m857: {
    nombre: "Jet punch (Jet punch)",
    tipo: "Agua",
    categoria: "Físico",
    potencia: 60,
    precision: 100,
    pp: 15,
    descripcion: "The user summons a torrent around its fist and punches at blinding speed. This move always goes first."
  },
  m858: {
    nombre: "Spicy extract (Spicy extract)",
    tipo: "Planta",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 15,
    descripcion: "The user emits an incredibly spicy extract, sharply boosting the target's Attack stat and harshly lowering the target's Defense stat."
  },
  m859: {
    nombre: "Spin out (Spin out)",
    tipo: "Acero",
    categoria: "Físico",
    potencia: 100,
    precision: 100,
    pp: 5,
    descripcion: "The user spins furiously by straining its legs, inflicting damage on the target. This also harshly lowers the user's Speed stat."
  },
  m860: {
    nombre: "Population bomb (Population bomb)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 20,
    precision: 90,
    pp: 10,
    descripcion: "The user’s fellows gather in droves to perform a combo attack that hits the target one to ten times in a row."
  },
  m861: {
    nombre: "Ice spinner (Ice spinner)",
    tipo: "Hielo",
    categoria: "Físico",
    potencia: 80,
    precision: 100,
    pp: 15,
    descripcion: "The user covers its feet in thin ice and twirls around, slamming into the target. This move's spinning motion also destroys the terrain."
  },
  m862: {
    nombre: "Glaive rush (Glaive rush)",
    tipo: "Dragón",
    categoria: "Físico",
    potencia: 120,
    precision: 100,
    pp: 5,
    descripcion: "The user throws its entire body into a reckless charge. After this move is used, attacks on the user cannot miss and will inflict double damage until the user’s next turn."
  },
  m863: {
    nombre: "Revival blessing (Revival blessing)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 1,
    descripcion: "The user bestows a loving blessing, reviving a party Pokémon that has fainted and restoring half that Pokémon's max HP."
  },
  m864: {
    nombre: "Salt cure (Salt cure)",
    tipo: "Roca",
    categoria: "Físico",
    potencia: 40,
    precision: 100,
    pp: 15,
    descripcion: "The user salt cures the target, inflicting damage every turn. Steel and Water types are more strongly affected by this move."
  },
  m865: {
    nombre: "Triple dive (Triple dive)",
    tipo: "Agua",
    categoria: "Físico",
    potencia: 30,
    precision: 95,
    pp: 10,
    descripcion: "The user performs a perfectly timed triple dive, hitting the target with splashes of water three times in a row."
  },
  m866: {
    nombre: "Mortal spin (Mortal spin)",
    tipo: "Veneno",
    categoria: "Físico",
    potencia: 30,
    precision: 100,
    pp: 15,
    descripcion: "The user performs a spin attack that can also eliminate the effects of such moves as Bind, Wrap, and Leech Seed. This also poisons opposing Pokémon."
  },
  m867: {
    nombre: "Doodle (Doodle)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 100,
    pp: 10,
    descripcion: "The user captures the very essence of the target in a sketch. This changes the Abilities of the user and its ally Pokémon to that of the target."
  },
  m868: {
    nombre: "Fillet away (Fillet away)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "The user sharply boosts its Attack, Sp. Atk, and Speed stats by using its own HP."
  },
  m869: {
    nombre: "Kowtow cleave (Kowtow cleave)",
    tipo: "Siniestro",
    categoria: "Físico",
    potencia: 85,
    precision: 0,
    pp: 10,
    descripcion: "The user slashes at the target after kowtowing to make the target let down its guard. This attack never misses."
  },
  m870: {
    nombre: "Flower trick (Flower trick)",
    tipo: "Planta",
    categoria: "Físico",
    potencia: 70,
    precision: 0,
    pp: 10,
    descripcion: "The user throws a rigged bouquet of flowers at the target. This attack never misses and always lands a critical hit."
  },
  m871: {
    nombre: "Torch song (Torch song)",
    tipo: "Fuego",
    categoria: "Especial",
    potencia: 80,
    precision: 100,
    pp: 10,
    descripcion: "The user blows out raging flames as if singing a song, scorching the target. This also boosts the user's Sp. Atk stat."
  },
  m872: {
    nombre: "Aqua step (Aqua step)",
    tipo: "Agua",
    categoria: "Físico",
    potencia: 80,
    precision: 100,
    pp: 10,
    descripcion: "The user toys with the target and attacks it using light and fluid dance steps. This also boosts the user's Speed stat."
  },
  m873: {
    nombre: "Raging bull (Raging bull)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 90,
    precision: 100,
    pp: 10,
    descripcion: "The user performs a tackle like a raging bull. This move's type depends on the user's form. It can also break barriers, such as Light Screen and Reflect."
  },
  m874: {
    nombre: "Make it rain (Make it rain)",
    tipo: "Acero",
    categoria: "Especial",
    potencia: 120,
    precision: 100,
    pp: 5,
    descripcion: "The user attacks by throwing out a mass of coins. This also lowers the user's Sp. Atk stat. Money is earned after the battle."
  },
  m875: {
    nombre: "Psicohojas (Psyblade)",
    tipo: "Psíquico",
    categoria: "Físico",
    potencia: 80,
    precision: 100,
    pp: 15,
    descripcion: "The user rends the target with an ethereal blade. This move's power is boosted by 50 percent if the user is on Electric Terrain."
  },
  m876: {
    nombre: "Hidrovapor (Hydro steam)",
    tipo: "Agua",
    categoria: "Especial",
    potencia: 80,
    precision: 100,
    pp: 15,
    descripcion: "The user blasts the target with boiling-hot water. This move's power is not lowered in harsh sunlight but rather boosted by 50 percent."
  },
  m877: {
    nombre: "Ruination (Ruination)",
    tipo: "Siniestro",
    categoria: "Especial",
    potencia: 1,
    precision: 90,
    pp: 10,
    descripcion: "The user summons a ruinous disaster. This cuts the target’s HP in half."
  },
  m878: {
    nombre: "Collision course (Collision course)",
    tipo: "Lucha",
    categoria: "Físico",
    potencia: 100,
    precision: 100,
    pp: 5,
    descripcion: "The user transforms and crashes to the ground, causing a massive prehistoric explosion. This move's power is boosted more than usual if it’s a supereffective hit."
  },
  m879: {
    nombre: "Electro drift (Electro drift)",
    tipo: "Eléctrico",
    categoria: "Especial",
    potencia: 100,
    precision: 100,
    pp: 5,
    descripcion: "The user races forward at ultrafast speeds, piercing its target with futuristic electricity. This move's power is boosted more than usual if it's a supereffective hit."
  },
  m880: {
    nombre: "Shed tail (Shed tail)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "The user creates a substitute for itself using its own HP before switching places with a party Pokémon in waiting."
  },
  m881: {
    nombre: "Chilly reception (Chilly reception)",
    tipo: "Hielo",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: ""
  },
  m882: {
    nombre: "Tidy up (Tidy up)",
    tipo: "Normal",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "The user tidies up and removes the effects of Spikes, Stealth Rock, Sticky Web, Toxic Spikes, and Substitute. This also boosts the user’s Attack and Speed stats."
  },
  m883: {
    nombre: "Snowscape (Snowscape)",
    tipo: "Hielo",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "The user summons a snowstorm lasting five turns. This boosts the Defense stats of Ice types."
  },
  m884: {
    nombre: "Pounce (Pounce)",
    tipo: "Bicho",
    categoria: "Físico",
    potencia: 50,
    precision: 100,
    pp: 20,
    descripcion: "The user attacks by pouncing on the target. This also lowers the target's Speed stat."
  },
  m885: {
    nombre: "Trailblaze (Trailblaze)",
    tipo: "Planta",
    categoria: "Físico",
    potencia: 50,
    precision: 100,
    pp: 20,
    descripcion: "The user attacks suddenly as if leaping out from tall grass. The user's nimble footwork boosts its Speed stat."
  },
  m886: {
    nombre: "Chilling water (Chilling water)",
    tipo: "Agua",
    categoria: "Especial",
    potencia: 50,
    precision: 100,
    pp: 20,
    descripcion: "The user attacks the target by showering it with water that's so cold it saps the target's power. This also lowers the target's Attack stat."
  },
  m887: {
    nombre: "Hyper drill (Hyper drill)",
    tipo: "Normal",
    categoria: "Físico",
    potencia: 100,
    precision: 100,
    pp: 5,
    descripcion: "The user spins the pointed part of its body at high speed to pierce the target. This attack can hit a target using a move such as Protect or Detect."
  },
  m888: {
    nombre: "Twin beam (Twin beam)",
    tipo: "Psíquico",
    categoria: "Especial",
    potencia: 40,
    precision: 100,
    pp: 10,
    descripcion: "The user shoots mystical beams from its eyes to inflict damage. The target is hit twice in a row."
  },
  m889: {
    nombre: "Rage fist (Rage fist)",
    tipo: "Fantasma",
    categoria: "Físico",
    potencia: 50,
    precision: 100,
    pp: 10,
    descripcion: "The user converts its rage into energy to attack. The more times the user has been hit by attacks, the greater the move's power."
  },
  m890: {
    nombre: "Armor cannon (Armor cannon)",
    tipo: "Fuego",
    categoria: "Especial",
    potencia: 120,
    precision: 100,
    pp: 5,
    descripcion: "The user shoots its own armor out as blazing projectiles. This also lowers the user’s Defense and Sp. Def stats."
  },
  m891: {
    nombre: "Bitter blade (Bitter blade)",
    tipo: "Fuego",
    categoria: "Físico",
    potencia: 90,
    precision: 100,
    pp: 10,
    descripcion: "The user focuses its bitter feelings toward the world of the living into a slashing attack. The user's HP is restored by up to half the damage taken by the target."
  },
  m892: {
    nombre: "Double shock (Double shock)",
    tipo: "Eléctrico",
    categoria: "Físico",
    potencia: 120,
    precision: 100,
    pp: 5,
    descripcion: "The user discharges all the electricity from its body to perform a high-damage attack. After using this move, the user will no longer be Electric type."
  },
  m893: {
    nombre: "Gigaton hammer (Gigaton hammer)",
    tipo: "Acero",
    categoria: "Físico",
    potencia: 160,
    precision: 100,
    pp: 5,
    descripcion: "The user swings its whole body around to attack with its huge hammer. This move can't be used twice in a row."
  },
  m894: {
    nombre: "Comeuppance (Comeuppance)",
    tipo: "Siniestro",
    categoria: "Físico",
    potencia: 1,
    precision: 100,
    pp: 10,
    descripcion: "The user retaliates with much greater force against the opponent that last inflicted damage on it."
  },
  m895: {
    nombre: "Aqua cutter (Aqua cutter)",
    tipo: "Agua",
    categoria: "Físico",
    potencia: 70,
    precision: 100,
    pp: 20,
    descripcion: "The user expels pressurized water to cut at the target like a blade. This move has a heightened chance of landing a critical hit."
  },
  m896: {
    nombre: "Blazing torque (Blazing torque)",
    tipo: "Fuego",
    categoria: "Físico",
    potencia: 80,
    precision: 100,
    pp: 10,
    descripcion: ""
  },
  m897: {
    nombre: "Wicked torque (Wicked torque)",
    tipo: "Siniestro",
    categoria: "Físico",
    potencia: 80,
    precision: 100,
    pp: 10,
    descripcion: ""
  },
  m898: {
    nombre: "Noxious torque (Noxious torque)",
    tipo: "Veneno",
    categoria: "Físico",
    potencia: 100,
    precision: 100,
    pp: 10,
    descripcion: ""
  },
  m899: {
    nombre: "Combat torque (Combat torque)",
    tipo: "Lucha",
    categoria: "Físico",
    potencia: 100,
    precision: 100,
    pp: 10,
    descripcion: ""
  },
  m900: {
    nombre: "Magical torque (Magical torque)",
    tipo: "Hada",
    categoria: "Físico",
    potencia: 100,
    precision: 100,
    pp: 10,
    descripcion: ""
  },
  m901: {
    nombre: "Blood moon (Blood moon)",
    tipo: "Normal",
    categoria: "Especial",
    potencia: 140,
    precision: 100,
    pp: 5,
    descripcion: "The user unleashes the full brunt of its spirit from a full moon that shines as red as blood. This move can't be used twice in a row."
  },
  m902: {
    nombre: "Matcha gotcha (Matcha gotcha)",
    tipo: "Planta",
    categoria: "Especial",
    potencia: 80,
    precision: 90,
    pp: 15,
    descripcion: "The user fires a blast of tea that it mixed. The user's HP is restored by up to half the damage taken by the target. This may also leave the target with a burn."
  },
  m903: {
    nombre: "Syrup bomb (Syrup bomb)",
    tipo: "Planta",
    categoria: "Especial",
    potencia: 60,
    precision: 85,
    pp: 10,
    descripcion: "The user sets off an explosion of sticky candy syrup, which coats the target and causes the target's Speed stat to drop each turn for three turns."
  },
  m904: {
    nombre: "Ivy cudgel (Ivy cudgel)",
    tipo: "Planta",
    categoria: "Físico",
    potencia: 100,
    precision: 100,
    pp: 10,
    descripcion: "The user strikes with an ivy-wrapped cudgel. This move's type changes depending on the mask worn by the user, and it has a heightened chance of landing a critical hit."
  },
  m905: {
    nombre: "Electrorrayo (Electro shot)",
    tipo: "Eléctrico",
    categoria: "Especial",
    potencia: 130,
    precision: 100,
    pp: 10,
    descripcion: "The user gathers electricity on the first turn, boosting its Sp. Atk stat, then fires a high-voltage shot on the next turn. The shot will be fired immediately in rain."
  },
  m906: {
    nombre: "Teraclúster (Tera starstorm)",
    tipo: "Normal",
    categoria: "Especial",
    potencia: 120,
    precision: 100,
    pp: 5,
    descripcion: "With the power of its crystals, the user bombards and eliminates the target. When used by Terapagos in its Stellar Form, this move damages all opposing Pokémon."
  },
  m907: {
    nombre: "Láser Veleidoso (Fickle beam)",
    tipo: "Dragón",
    categoria: "Especial",
    potencia: 80,
    precision: 100,
    pp: 5,
    descripcion: "The user shoots a beam of light to inflict damage. Sometimes all the user's heads shoot beams in unison, doubling the move's power."
  },
  m908: {
    nombre: "Llama Protectora (Burning bulwark)",
    tipo: "Fuego",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "The user's intensely hot fur protects it from attacks and also burns any attacker that makes direct contact with it."
  },
  m909: {
    nombre: "Relámpago Súbito (Thunderclap)",
    tipo: "Eléctrico",
    categoria: "Especial",
    potencia: 70,
    precision: 100,
    pp: 5,
    descripcion: "This move enables the user to attack first with a jolt of electricity. This move fails if the target is not readying an attack."
  },
  m910: {
    nombre: "Filo Potente (Mighty cleave)",
    tipo: "Roca",
    categoria: "Físico",
    potencia: 95,
    precision: 100,
    pp: 5,
    descripcion: "The user wields the light that has accumulated atop its head to cleave the target. This move hits even if the target protects itself."
  },
  m911: {
    nombre: "Tajo Taquión (Tachyon cutter)",
    tipo: "Acero",
    categoria: "Especial",
    potencia: 50,
    precision: 0,
    pp: 10,
    descripcion: "The user attacks by launching particle blades at the target twice in a row. This attack never misses."
  },
  m912: {
    nombre: "Prensa Metálica (Hard press)",
    tipo: "Acero",
    categoria: "Físico",
    potencia: 0,
    precision: 100,
    pp: 10,
    descripcion: "The target is crushed with an arm, a claw, or the like to inflict damage. The more HP the target has left, the greater the move's power."
  },
  m913: {
    nombre: "Bramido Dragón (Dragon cheer)",
    tipo: "Dragón",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 15,
    descripcion: "The user raises its allies’ morale with a draconic cry so that their future attacks have a heightened chance of landing critical hits. This rouses Dragon types more."
  },
  m914: {
    nombre: "Canto Encantador (Alluring voice)",
    tipo: "Sonido",
    categoria: "Especial",
    potencia: 80,
    precision: 100,
    pp: 10,
    descripcion: "The user attacks the target using its angelic voice. This also confuses the target if its stats have been boosted during the turn."
  },
  m915: {
    nombre: "Cólera Ardiente (Temper flare)",
    tipo: "Fuego",
    categoria: "Físico",
    potencia: 75,
    precision: 100,
    pp: 10,
    descripcion: "Spurred by desperation, the user attacks the target. This move's power is doubled if the user's previous move failed."
  },
  m916: {
    nombre: "Plancha Voltaica (Supercell slam)",
    tipo: "Eléctrico",
    categoria: "Físico",
    potencia: 100,
    precision: 95,
    pp: 15,
    descripcion: "The user electrifies its body and drops onto the target to inflict damage. If this move misses, the user takes damage instead."
  },
  m917: {
    nombre: "Psicorruido (Psychic noise)",
    tipo: "Sonido",
    categoria: "Especial",
    potencia: 75,
    precision: 100,
    pp: 10,
    descripcion: "The user attacks the target with unpleasant sound waves. For two turns, the target is prevented from recovering HP through moves, Abilities, or held items."
  },
  m918: {
    nombre: "Palma Rauda (Upper hand)",
    tipo: "Lucha",
    categoria: "Físico",
    potencia: 65,
    precision: 100,
    pp: 15,
    descripcion: "The user reacts to the target's movement and strikes with the heel of its palm, making the target flinch. This move fails if the target is not readying a priority move."
  },
  m919: {
    nombre: "Cadena Virulenta (Malignant chain)",
    tipo: "Veneno",
    categoria: "Especial",
    potencia: 100,
    precision: 100,
    pp: 5,
    descripcion: "The user pours toxins into the target by wrapping them in a toxic, corrosive chain. This may also leave the target badly poisoned."
  },
  m920: {
    nombre: "Ruido Solido (Loud Crash)",
    tipo: "Sonido",
    categoria: "Físico",
    potencia: 50,
    precision: 100,
    pp: 15,
    descripcion: "Crea una burbuja que contiene gritos; al impactar, las ondas sonoras golpean como si fueran un impacto sólido."
  },
  m921: {
    nombre: "Eco Oscuro (Dark Echo)",
    tipo: "Sonido",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 10,
    descripcion: "Un eco tenebroso resuena en el campo de batalla; puede llegar a confundir o paralizar aleatoriamente al objetivo."
  },
  m922: {
    nombre: "Guitarra Volteo (Amp Smash)",
    tipo: "Sonido",
    categoria: "Físico",
    potencia: 110,
    precision: 60,
    pp: 20,
    descripcion: "Movimiento característico de Toxtricity: crea una guitarra hecha de electricidad y ondas sonoras, con la cual golpea la cabeza del rival. Paraliza al objetivo. Si falla, el usuario se confunde a sí mismo."
  },
  m923: {
    nombre: "Disonante (Dissonance)",
    tipo: "Sonido",
    categoria: "Estado",
    potencia: 0,
    precision: 90,
    pp: 5,
    descripcion: "Un sonido caótico y fuera de tono que puede causar cualquier estado alterado. Obliga al rival a salir del campo y confunde al Pokémon que entra en su lugar."
  },
  m924: {
    nombre: "Redoble (Drum Roll)",
    tipo: "Sonido",
    categoria: "Especial",
    potencia: 0,
    precision: 100,
    pp: 5,
    descripcion: "El usuario ejecuta un redoble y cambia con otro Pokémon de su equipo. El Pokémon que entra en su lugar aparece con su Ataque, Ataque Especial y Velocidad aumentados en un nivel."
  },
  m925: {
    nombre: "Hielo Oscuro (Shadow chill)",
    tipo: "Sonido",
    categoria: "Estado",
    potencia: 0,
    precision: 0,
    pp: 25,
    descripcion: "El usuario juega a las palmas con el rival. Al final, ambos terminan confundidos."
  },
  m926: {
    nombre: "Canto Solemne (Last Hymn)",
    tipo: "Sonido",
    categoria: "Especial",
    potencia: 120,
    precision: 90,
    pp: 5,
    descripcion: "Un canto cargado de sacrificio. Si la vida del usuario está por debajo de 1/3, inflige el doble de daño a costa de su propia vida. Si el usuario tiene un compañero en el campo, este recupera un 10% de su vida máxima."
  },
  m927: {
  nombre: "Estrepito (Outcry)",
  tipo: "Sonido",
  categoria: "Especial",
  potencia: 80,
  precision: 100,
  pp: 10,
  descripcion: "Todos los pokemon en el campo escuchan el estruendo. Los rivales reciben daño y los aliados aumentan su velocidad en un nivel."
},

m928: {
  nombre: "Coral Mistico (Mystic Choir)",
  tipo: "Sonido",
  categoria: "Estado",
  potencia: 0,
  precision: 0,
  pp: 15,
  descripcion: "Un canto en armonia que cura a todos los aliados un 25% de su vida maxima y elimina problemas de estado."
},

m929: {
  nombre: "Trueno Vocal (Thunder Voice)",
  tipo: "Sonido",
  categoria: "Especial",
  potencia: 90,
  precision: 85,
  pp: 10,
  descripcion: "Un grito ensordecedor cargado de electricidad. Puede paralizar al objetivo con un 30% de probabilidad."
},

m930: {
  nombre: "Susurro Afilado (Sharp Whisper)",
  tipo: "Sonido",
  categoria: "Fisico",
  potencia: 60,
  precision: 100,
  pp: 20,
  descripcion: "Un susurro que atraviesa barreras. Ignora sustituto y siempre baja la defensa especial del objetivo."
},

m931: {
  nombre: "Armonia Caotica (Chaotic Harmony)",
  tipo: "Sonido",
  categoria: "Estado",
  potencia: 0,
  precision: 100,
  pp: 5,
  descripcion: "Un coro descontrolado. Puede confundir tanto a rivales como a aliados, pero aumenta el ataque especial de los aliados en un nivel."
},

m932: {
  nombre: "Explosion Sonica (Sonic Burst)",
  tipo: "Sonido",
  categoria: "Especial",
  potencia: 120,
  precision: 70,
  pp: 5,
  descripcion: "Un estallido de ondas sonoras devastador. Despues de usarlo, el ataque especial del usuario baja un nivel."
},

m933: {
  nombre: "Marcha de Guerra (War March)",
  tipo: "Sonido",
  categoria: "Estado",
  potencia: 0,
  precision: 0,
  pp: 20,
  descripcion: "Un ritmo belico que inspira a los aliados, aumentando su ataque en un nivel."
},

m934: {
  nombre: "Grito Desgarrador (Rending Scream)",
  tipo: "Sonido",
  categoria: "Especial",
  potencia: 95,
  precision: 100,
  pp: 10,
  descripcion: "Un grito que atraviesa defensas. Ignora habilidades que reducen el daño de movimientos de sonido y puede bajar la defensa del objetivo."
},

m935: {
  nombre: "Cadencia Final (Final Cadence)",
  tipo: "Sonido",
  categoria: "Especial",
  potencia: 140,
  precision: 100,
  pp: 5,
  descripcion: "Una melodia final y devastadora. Solo puede usarse si el usuario tiene menos del 50% de su vida. Despues de usarlo, queda confundido."
},

m936: {
  nombre: "Eco de Almas (Soul Echo)",
  tipo: "Sonido",
  categoria: "Estado",
  potencia: 0,
  precision: 0,
  pp: 10,
  descripcion: "Un eco espiritual resuena en el campo. Durante 3 turnos, los ataques de sonido curan al usuario un 25% del daño infligido."
}
};



if (typeof window !== "undefined") window.movimientos = movimientos;
