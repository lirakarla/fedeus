const quotes= [
    'Siempre humildes y amables, pacientes, tolerantes unos con otros en amor.',
    'Todo lo puedo en Cristo que me fortalece.',
    'Dios tiene un plan que lleva tu nombre.',
    'Solo debes dar un paso de fe y Dios se encargará de lo demás.',
    'En medio de la tormenta, confía en Dios.',
    'Dios no te dejará caer.',
    'No te olvides de Dios, él jamás se olvida de ti.',
    'La fe no hace que las cosas sean fáciles, pero hace que sean posibles.',
    '¿Como que si puedo? Para el que cree, todo es posible.',
    'Jesus nunca prometió una vida sin problemas, pero sí nos aseguró su presencia, ayuda y victoria.',
    'Porque tú eres mi roca y mi fortaleza. Por amor de tu nombre me guiarás y me encaminarás.',
    'Cuando la vida te golpea y te pone de rodillas estás en la posición correcta para orar.',
    'En medio de cualquier batalla, la mejor arma es la oración.',
    'Pues al lado de Dios, nada será imposible.',
    'Cuando te sientas débil, deja que el Señor sea tu fuerza.',
    'Deja que todo lo que hagas esté lleno de amor.',
    'No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios que te esfuerzo; siempre te ayudaré, siempre te sustentaré con la diestra de mi.',
    'El Señor no te abandona jamás, él está contigo en todo momento.'
]

const randomQuote= Math.floor(Math.random() * (quotes.length))
document.getElementById('quoteDisplay').innerHTML = quotes[randomQuote]