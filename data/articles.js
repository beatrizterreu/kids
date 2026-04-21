// KidSpark — 20 bilingual articles (ES + EN)
// Each article has both language versions; slug is language-agnostic

function imgUrl(prompt) {
  return `https://image.pollinations.ai/prompt/${encodeURIComponent(
    prompt + ', real photograph, warm natural light, lifestyle editorial photography, no text no logos'
  )}?width=800&height=520&nologo=true&seed=42`;
}

export const articles = [
  {
    slug: 'rainy-day-activities',
    category: { es: 'Ocio', en: 'Leisure' },
    date: '2026-03-15',
    readTime: '5 min',
    imagePrompt: 'colorful craft supplies flatlay on wooden table, paint pots, cardboard, scissors, glue stick, paper rolls, rainy window in background, cozy kitchen, top-down view',
    es: {
      title: '15 actividades para días de lluvia sin pantallas',
      excerpt: 'Cuando llueve y los niños no pueden salir, el aburrimiento llega rápido. Aquí tienes 15 ideas creativas para mantenerlos activos, felices y aprendiendo sin pantallas.',
      content: [
        { type: 'intro', text: 'Los días de lluvia no tienen por qué ser aburridos. Con materiales que ya tienes en casa puedes convertir una tarde gris en una aventura memorable.' },
        { type: 'h2', text: '15 ideas para un día de lluvia perfecto' },
        { type: 'list', items: ['🎨 Pintar con acuarelas en papel grande', '🏠 Construir una tienda de campaña con sábanas y sillas', '🍪 Hornear galletas juntos', '🧩 Montar un puzzle en familia', '🎭 Teatro de sombras con linterna', '📖 Crear un libro ilustrado propio', '🔬 Experimentos con bicarbonato y vinagre', '🎵 Concierto con instrumentos improvisados', '🌱 Plantar semillas en macetas pequeñas', '✂️ Collage con revistas viejas', '🎲 Juegos de mesa en familia', '🧸 Hospital de peluches (juego de rol)', '🗺️ Crear un mapa del tesoro en casa', '💃 Clase de baile improvisada', '📸 Fotógrafo del día con móvil viejo'] },
        { type: 'h2', text: 'Consejo de padres' },
        { type: 'text', text: 'Involucra a los niños en la elección de la actividad. Cuando sienten que tienen voz, su implicación y disfrute se multiplican.' },
        { type: 'h2', text: 'Por qué los días sin pantallas importan' },
        { type: 'text', text: 'Investigaciones de la Universidad de Michigan demuestran que los niños que pasan tiempo libre sin dispositivos electrónicos desarrollan mayor capacidad de atención, creatividad y tolerancia a la frustración. No se trata de prohibir las pantallas, sino de diversificar las experiencias.' },
        { type: 'h2', text: 'Cómo gestionar la resistencia inicial' },
        { type: 'text', text: 'Es normal que al principio haya quejas. Los primeros 10-15 minutos son los más difíciles: una vez enganchados en la actividad, el tiempo vuela. El truco es tener todo preparado antes de proponerlo.' },
        { type: 'text', text: 'No tienes que entretenerlos tú. Tu papel es arrancar la actividad y retirarte poco a poco. El aburrimiento inicial es precisamente el motor de la creatividad — deja que lo sientan brevemente antes de ofrecer la primera idea.' },
      ],
    },
    en: {
      title: '15 rainy day activities for kids without screens',
      excerpt: "When rain keeps kids indoors, boredom can strike fast. Here are 15 creative ideas to keep them active, happy, and learning without any screens.",
      content: [
        { type: 'intro', text: "Rainy days don't have to be boring. With materials you already have at home, you can turn a grey afternoon into a memorable adventure." },
        { type: 'h2', text: '15 ideas for the perfect rainy day' },
        { type: 'list', items: ['🎨 Watercolor painting on large paper', '🏠 Build an indoor fort with sheets and chairs', '🍪 Bake cookies together', '🧩 Put together a family puzzle', '🎭 Shadow puppet theater with a flashlight', '📖 Create your own illustrated book', '🔬 Baking soda and vinegar experiments', '🎵 Improvised instrument concert', '🌱 Plant seeds in small pots', '✂️ Magazine collage', '🎲 Family board games', '🧸 Stuffed animal hospital (role play)', '🗺️ Create an indoor treasure map', '💃 Impromptu dance class', '📸 Photographer for the day with an old phone'] },
        { type: 'h2', text: 'Parent tip' },
        { type: 'text', text: 'Let kids choose the activity. When they have a voice in what happens, their engagement and enjoyment multiply.' },
        { type: 'h2', text: 'Why screen-free days matter' },
        { type: 'text', text: 'Research from the University of Michigan shows that children who spend free time without electronic devices develop stronger attention spans, greater creativity, and better frustration tolerance. The goal is not to ban screens, but to diversify experiences.' },
        { type: 'h2', text: 'Managing initial resistance' },
        { type: 'text', text: "It's normal for kids to protest at first. The first 10–15 minutes are the hardest — once they get into the activity, time flies. The trick is to have everything ready before suggesting it." },
        { type: 'text', text: "You don't have to entertain them yourself. Your role is to kick off the activity and gradually step back. That initial boredom is the engine of creativity — let them feel it briefly before offering the first idea." },
      ],
    },
  },

  {
    slug: 'math-through-play',
    category: { es: 'Educación', en: 'Education' },
    date: '2026-03-20',
    readTime: '6 min',
    imagePrompt: 'colorful wooden counting blocks, abacus, number tiles and math puzzles arranged on bright floor, morning sunlight, top-down flat lay, vivid primary colors',
    es: {
      title: 'Cómo enseñar matemáticas jugando sin que lo noten',
      excerpt: 'Las matemáticas no tienen que ser sinónimo de deberes aburridos. Aprende a integrar conceptos matemáticos en el juego cotidiano para que tus hijos aprendan sin darse cuenta.',
      content: [
        { type: 'intro', text: 'Los niños aprenden conceptos abstractos mejor cuando los viven de forma concreta y jugando. Contar escalones, medir ingredientes o dividir una pizza son experiencias matemáticas reales.' },
        { type: 'h2', text: 'Ideas por edad' },
        { type: 'list', items: ['👶 0–3 años: contar objetos, clasificar por colores y tamaños', '🧒 3–5 años: recetas sencillas, puzzles de formas, cartas numeradas', '🧑 6–8 años: juegos con dados, construir con bloques y medir, tiendita con dinero de juguete', '👦 9–12 años: ajedrez, calcular precios en el súper, geometría con papel'] },
        { type: 'h2', text: 'Los mejores juegos matemáticos' },
        { type: 'list', items: ['**Monopoly** — dinero, sumas y estrategia', '**Uno** — secuencias y concentración', '**Blokus** — geometría espacial desde los 7', '**Juegos de cartas** — ordenar y comparar números', '**Sudoku** — lógica desde los 8 años'] },
        { type: 'h2', text: 'Matemáticas en la vida cotidiana' },
        { type: 'text', text: 'No necesitas reservar tiempo especial para las matemáticas: están en todas partes. Contar los escalones, calcular cuánto tiempo falta para la cena, comparar precios en el supermercado o dividir una pizza en partes iguales son lecciones matemáticas auténticas.' },
        { type: 'text', text: 'La clave está en nombrar lo que hacéis juntos: "hemos partido la naranja en cuatro trozos iguales, eso se llama un cuarto". Esa verbalización ancla el concepto mucho mejor que cualquier ficha de ejercicios.' },
      ],
    },
    en: {
      title: 'Teaching math through play: they will not even notice',
      excerpt: "Math doesn't have to mean boring homework. Learn how to weave math into everyday play so your kids learn without even realizing it.",
      content: [
        { type: 'intro', text: 'Children learn abstract concepts better when they experience them concretely through play. Counting steps, measuring ingredients, or splitting a pizza are real, meaningful math experiences.' },
        { type: 'h2', text: 'Ideas by age' },
        { type: 'list', items: ['👶 0–3 years: count objects, sort by color and size', '🧒 3–5 years: simple recipes, shape puzzles, numbered cards', '🧑 6–8 years: dice games, building with blocks, toy store with play money', '👦 9–12 years: chess, grocery price calculations, paper geometry'] },
        { type: 'h2', text: 'Best math games' },
        { type: 'list', items: ['**Monopoly** — money, addition, strategy', '**Uno** — sequences and concentration', '**Blokus** — spatial geometry from age 7', '**Card games** — ordering and comparing numbers', '**Sudoku** — logic from age 8'] },
        { type: 'h2', text: 'Math in everyday life' },
        { type: 'text', text: "You don't need to set aside special time for math — it's everywhere. Counting steps, figuring out how long until dinner, comparing prices at the supermarket, or splitting a pizza equally are all authentic math lessons." },
        { type: 'text', text: 'The key is to name what you\'re doing together: "we\'ve cut the orange into four equal pieces — that\'s called a quarter." That verbalization anchors the concept far better than any worksheet.' },
      ],
    },
  },

  {
    slug: 'yoga-for-kids',
    category: { es: 'Bienestar', en: 'Wellness' },
    date: '2026-03-25',
    readTime: '7 min',
    imagePrompt: 'colorful children yoga mat unrolled on wooden floor, small yoga blocks and bolster, green plant nearby, bright natural window light, serene calm space, no people',
    es: {
      title: 'Yoga para niños: beneficios probados y 8 posturas para empezar',
      excerpt: 'El yoga infantil reduce el estrés, mejora la concentración y fortalece el vínculo familiar. Todo lo que necesitas para empezar en casa hoy mismo.',
      content: [
        { type: 'intro', text: 'El yoga para niños ha crecido enormemente en popularidad, y no es casualidad. Cada vez más estudios demuestran sus beneficios físicos y emocionales, y no necesitas equipamiento ni experiencia para practicarlo en casa.' },
        { type: 'h2', text: 'Beneficios respaldados por la ciencia' },
        { type: 'list', items: ['🧠 Mejora la concentración y el rendimiento escolar', '😴 Favorece el sueño y reduce la ansiedad', '💪 Fortalece la musculatura y mejora el equilibrio', '❤️ Desarrolla la empatía y la gestión emocional', '🌬️ Enseña técnicas de respiración para momentos de estrés'] },
        { type: 'h2', text: '8 posturas perfectas para niños' },
        { type: 'list', items: ['🐱 **Gato-Vaca** — mueve la columna y relaja la espalda', '🐶 **Perro boca abajo** — estira piernas y hombros', '🦁 **León** — perfecta para sacar tensiones con un buen rugido', '🌳 **Árbol** — trabaja el equilibrio y la concentración', '🦋 **Mariposa** — estiramiento de caderas sentados', '🐍 **Cobra** — abre el pecho y fortalece la espalda', '🧘 **Niño** — la postura de descanso definitiva', '⭐ **Estrella de mar** — relajación total al final'] },
        { type: 'h2', text: 'Cómo empezar una sesión en casa' },
        { type: 'text', text: 'No necesitas experiencia previa ni esterilla especial. Bastará con un espacio despejado en el salón, ropa cómoda y unos 15-20 minutos. Empieza siempre con la respiración: tres respiraciones profundas juntos son suficientes para crear el cambio de ritmo.' },
        { type: 'text', text: 'Para los más pequeños, los nombres de animales son la clave: no digas "postura del árbol", di "seamos árboles en el viento". La narración convierte el yoga en un juego imaginativo que los niños quieren repetir.' },
        { type: 'h2', text: 'Recursos recomendados' },
        { type: 'text', text: 'Yoga con Adriene (YouTube) tiene sesiones específicas para niños. También Cosmic Kids Yoga ofrece sesiones en inglés por edades con historias y personajes que los pequeños adoran. Ambos son completamente gratuitos.' },
      ],
    },
    en: {
      title: 'Yoga for kids: science-backed benefits and 8 poses to start today',
      excerpt: "Kids yoga reduces stress, improves focus, and strengthens family bonds. Everything you need to start at home today.",
      content: [
        { type: 'intro', text: "Children's yoga has grown enormously in popularity. A growing body of research confirms its physical and emotional benefits — and you need no equipment or experience to start at home." },
        { type: 'h2', text: 'Science-backed benefits' },
        { type: 'list', items: ['🧠 Improves concentration and school performance', '😴 Promotes sleep and reduces anxiety', '💪 Strengthens muscles and improves balance', '❤️ Develops empathy and emotional regulation', '🌬️ Teaches breathing techniques for stressful moments'] },
        { type: 'h2', text: '8 perfect poses for kids' },
        { type: 'list', items: ['🐱 **Cat-Cow** — moves the spine and eases back tension', '🐶 **Downward Dog** — stretches legs and shoulders', '🦁 **Lion** — release tension with a good roar', '🌳 **Tree** — works balance and concentration', '🦋 **Butterfly** — hip stretch from a seated position', '🐍 **Cobra** — opens the chest and strengthens the back', '🧘 **Child\'s Pose** — the ultimate rest pose', '⭐ **Starfish** — complete relaxation at the end'] },
        { type: 'h2', text: 'How to start a home session' },
        { type: 'text', text: 'You need no prior experience or special mat. A cleared space in the living room, comfortable clothes, and 15–20 minutes are all you need. Always begin with breathing: three deep breaths together are enough to shift the energy.' },
        { type: 'text', text: 'For younger children, animal names are the key. Don\'t say "tree pose" — say "let\'s be trees swaying in the wind." Storytelling turns yoga into an imaginative game children want to repeat.' },
        { type: 'h2', text: 'Free resources' },
        { type: 'text', text: 'Cosmic Kids Yoga on YouTube offers free sessions in English organized by age, with stories and characters that little ones love. Yoga With Adriene also has dedicated family and children\'s sessions, all completely free.' },
      ],
    },
  },

  {
    slug: 'recycled-crafts',
    category: { es: 'Manualidades', en: 'Crafts' },
    date: '2026-04-01',
    readTime: '5 min',
    imagePrompt: 'recycled craft materials flatlay, cardboard tubes, bottle caps, egg cartons, paint brushes, colored tape, bright craft table, top-down overhead shot, vivid colors',
    es: {
      title: '12 manualidades con materiales reciclados para todas las edades',
      excerpt: 'Da una segunda vida a cajas de cereales, rollos de papel y botellas de plástico. Estas manualidades enseñan creatividad, responsabilidad ambiental y horas de diversión.',
      content: [
        { type: 'intro', text: 'Las mejores manualidades no siempre requieren materiales caros. Con lo que tienes para reciclar puedes crear proyectos increíbles que también enseñan a cuidar el medioambiente.' },
        { type: 'h2', text: 'Materiales que no debes tirar' },
        { type: 'list', items: ['Rollos de papel higiénico y de cocina', 'Cajas de cartón de cereales, zapatos o paquetes', 'Botellas y tapones de plástico', 'Telas y ropa vieja', 'Revistas y periódicos', 'Hueveras de cartón', 'Tarros de cristal'] },
        { type: 'h2', text: '12 proyectos fáciles' },
        { type: 'list', items: ['🎭 **Marionetas de calcetín** — cada calcetín sin pareja es un personaje', '🚀 **Cohete con botella** — plástico + papel de aluminio + imaginación', '🦚 **Mariposa de huevera** — corta, pinta y añade antenas de limpiapipas', '🎨 **Cuadro de tapones** — tapones de colores en un marco', '🏰 **Castillo de cajas** — varias cajas unidas y pintadas', '🐢 **Tortuga de plato de papel** — plato = caparazón', '🌊 **Pecera de botella** — peces de papel dentro', '🦋 **Móvil de mariposas** — periódicos doblados y cuerda', '📦 **Organizador de lápices** — rollos en una caja decorada', '🎁 **Portafotos con pinzas** — cuerda + pinzas pintadas', '🌻 **Maceta de lata** — lata limpia + pintura', '🎸 **Guitarra de caja de zapatos** — gomas elásticas como cuerdas'] },
        { type: 'h2', text: 'El valor pedagógico del reciclaje creativo' },
        { type: 'text', text: 'Las manualidades con materiales reciclados enseñan algo que va más allá del arte: la mentalidad de que los objetos tienen valor más allá de su primer uso. Los niños que practican el reciclaje creativo desarrollan pensamiento divergente y sensibilidad medioambiental desde pequeños.' },
        { type: 'text', text: 'Crea una "caja de tesoros" en casa: una caja grande donde vayan todos los materiales recuperables. Los niños aprenderán a ver el potencial en cada objeto antes de tirarlo, y tendrán siempre materia prima a mano para sus proyectos.' },
      ],
    },
    en: {
      title: '12 DIY crafts from recycled materials for all ages',
      excerpt: 'Give a second life to cereal boxes, paper rolls, and plastic bottles. These crafts teach creativity, environmental responsibility, and provide hours of fun.',
      content: [
        { type: 'intro', text: "The best crafts don't always need expensive materials. With what you have to recycle, you can create incredible projects that also teach children to care for the environment." },
        { type: 'h2', text: 'Materials not to throw away' },
        { type: 'list', items: ['Toilet paper and kitchen rolls', 'Cardboard boxes from cereal, shoes, or deliveries', 'Plastic bottles and bottle caps', 'Old fabric and clothing', 'Magazines and newspapers', 'Egg cartons', 'Glass jars'] },
        { type: 'h2', text: '12 easy projects' },
        { type: 'list', items: ['🎭 **Sock puppets** — every lonely sock becomes a character', '🚀 **Bottle rocket** — plastic + foil + imagination', '🦚 **Egg carton butterfly** — cut, paint, add pipe cleaner antennae', '🎨 **Bottle cap mosaic** — colorful caps in a frame', '🏰 **Cardboard castle** — boxes joined and painted', '🐢 **Paper plate turtle** — plate = shell', '🌊 **Bottle aquarium** — paper fish inside', '🦋 **Newspaper butterfly mobile** — folded newspaper and string', '📦 **Pencil organizer** — rolls in a decorated box', '🎁 **Clothespin photo display** — string + painted clips', '🌻 **Tin can planter** — clean tin + paint', '🎸 **Shoebox guitar** — rubber bands as strings'] },
        { type: 'h2', text: 'The educational value of upcycling' },
        { type: 'text', text: 'Crafts from recycled materials teach something beyond art: the mindset that objects have value beyond their first use. Children who practice creative recycling develop divergent thinking and environmental awareness from an early age.' },
        { type: 'text', text: 'Create a "treasure box" at home: a large container where all reusable materials go. Children will learn to see potential in each object before discarding it, and they\'ll always have raw materials ready for their projects.' },
      ],
    },
  },

  {
    slug: 'cooking-with-kids',
    category: { es: 'Explorar', en: 'Explore' },
    date: '2026-04-05',
    readTime: '6 min',
    imagePrompt: 'baking ingredients flatlay on kitchen counter, flour, eggs, cookie cutters, rolling pin, colorful mixing bowls, warm morning light, overhead top-down view, cozy kitchen',
    es: {
      title: 'Cocinar con niños: recetas fáciles y lo que aprenden en la cocina',
      excerpt: 'La cocina es uno de los mejores laboratorios de aprendizaje para los niños: matemáticas, ciencias, responsabilidad... y algo rico al final.',
      content: [
        { type: 'intro', text: 'Cocinar con tus hijos va mucho más allá de lo culinario. Es una actividad multisensorial que trabaja la lectura, la matemática, la ciencia y la autoestima.' },
        { type: 'h2', text: 'Qué aprenden en la cocina' },
        { type: 'list', items: ['📐 Fracciones y medidas al pesar ingredientes', '⏱️ Gestión del tiempo y secuenciación', '🔬 Ciencia: por qué sube el bizcocho, cómo se derrite el chocolate', '🥗 Hábitos alimenticios saludables', '🤝 Trabajo en equipo y seguir instrucciones', '😊 Satisfacción de crear algo con sus manos'] },
        { type: 'h2', text: 'Recetas por edad' },
        { type: 'list', items: ['👶 3–5 años: untar tostadas, mezclar, decorar galletas', '🧒 5–7 años: ensalada de frutas, batidos, pizza con base prehecha', '🧑 8–10 años: tortilla de patata, sándwiches, granola', '👦 10–12 años: pasta con salsa, huevos revueltos, bizcocho básico'] },
        { type: 'h2', text: 'Normas de seguridad en la cocina con niños' },
        { type: 'text', text: 'La seguridad no tiene que arruinar la diversión, pero sí necesita reglas claras. Lávate siempre las manos antes de empezar, usa delantal para proteger la ropa, y establece desde el principio que solo los adultos manejan el fuego y los cuchillos afilados.' },
        { type: 'text', text: 'Adapta las tareas a la edad: los pequeños pueden mezclar, verter y decorar; los mayores pueden pelar, rallar y usar el microondas. A medida que demuestran responsabilidad, puedes ampliar gradualmente lo que hacen solos. Esa progresión de autonomía es enormemente motivadora.' },
      ],
    },
    en: {
      title: 'Cooking with kids: easy recipes and what they learn in the kitchen',
      excerpt: 'The kitchen is one of the best learning labs for children: math, science, responsibility — and something delicious at the end.',
      content: [
        { type: 'intro', text: "Cooking with your children goes far beyond the culinary. It's a multisensory activity that works literacy, math, science, and self-esteem." },
        { type: 'h2', text: 'What they learn in the kitchen' },
        { type: 'list', items: ['📐 Fractions and measurements when weighing ingredients', '⏱️ Time management and sequencing', '🔬 Science: why cake rises, how chocolate melts', '🥗 Healthy eating habits', '🤝 Teamwork and following instructions', '😊 Satisfaction of creating something with their hands'] },
        { type: 'h2', text: 'Recipes by age' },
        { type: 'list', items: ['👶 3–5 years: spread toast, mix, decorate cookies', '🧒 5–7 years: fruit salad, smoothies, pizza with a pre-made base', '🧑 8–10 years: omelette, sandwiches, granola', '👦 10–12 years: pasta with sauce, scrambled eggs, basic sponge cake'] },
        { type: 'h2', text: 'Kitchen safety with children' },
        { type: 'text', text: "Safety rules don't have to spoil the fun, but they do need to be clear from the start. Always wash hands before you begin, wear aprons to protect clothes, and establish early that only adults handle fire and sharp knives." },
        { type: 'text', text: 'Adapt tasks to age: young children can mix, pour, and decorate; older ones can peel, grate, and use the microwave. As they demonstrate responsibility, you can gradually expand what they do independently. That progression of autonomy is enormously motivating.' },
      ],
    },
  },

  {
    slug: 'science-experiments-home',
    category: { es: 'Explorar', en: 'Explore' },
    date: '2026-04-08',
    readTime: '5 min',
    imagePrompt: 'colorful science experiment supplies on table, baking soda, vinegar bottle, food coloring drops, small beakers, safety goggles, bubbling foam, bright lab-style setup, vivid colors',
    es: {
      title: '10 experimentos científicos caseros que harán alucinar a tus hijos',
      excerpt: 'Ciencia con materiales que ya tienes en casa. Experimentos seguros y espectaculares para despertar la curiosidad científica desde pequeños.',
      content: [
        { type: 'intro', text: 'Con bicarbonato, vinagre, leche y curiosidad puedes crear momentos de asombro que tus hijos recordarán durante años y que les explican cómo funciona el mundo.' },
        { type: 'h2', text: '10 experimentos para hacer ahora' },
        { type: 'list', items: ['🌋 **Volcán de bicarbonato** — bicarbonato + vinagre + colorante rojo', '🌈 **Arcoíris en un vaso** — capas de líquidos de distintas densidades', '🥛 **Pegamento de leche** — leche + vinagre crean una proteína plástica', '💧 **Tensión superficial** — ¿cuántos clips caben en un vaso lleno?', '🌱 **Semilla en algodón** — observa germinar en un vaso de cristal', '🎨 **Pintura de leche** — leche + colorante + jabón: los colores bailan', '🧲 **Brújula casera** — aguja imantada en corcho sobre agua', '🫧 **Lava lámpara** — aceite + agua + pastilla efervescente', '🔭 **Sombras gigantes** — cómo cambia la sombra según la distancia', '❄️ **Agua que se congela al instante** — efecto Mpemba con agua destilada'] },
        { type: 'h2', text: 'Cómo convertir los experimentos en aprendizaje real' },
        { type: 'text', text: 'El "¡guau!" es solo el principio. Para que el experimento se convierta en aprendizaje científico real, haz siempre estas tres preguntas: ¿qué creemos que va a pasar?, ¿qué ha pasado realmente?, ¿por qué crees que ha pasado así? Ese ciclo de hipótesis-observación-reflexión es el método científico en miniatura.' },
        { type: 'text', text: 'Guarda un cuaderno de experimentos donde los niños dibujen o escriban lo que han visto. Con el tiempo ese cuaderno se convierte en un pequeño libro de ciencia propio, y releer los experimentos anteriores refuerza el aprendizaje de una forma que ningún libro de texto puede igualar.' },
      ],
    },
    en: {
      title: '10 easy science experiments for kids using household items',
      excerpt: 'Real science with what you already have at home. Safe, spectacular experiments perfect for sparking scientific curiosity from a young age.',
      content: [
        { type: 'intro', text: "With baking soda, vinegar, milk, and curiosity you can create wow moments your children will remember for years — and that explain how the world works." },
        { type: 'h2', text: '10 experiments to do right now' },
        { type: 'list', items: ['🌋 **Baking soda volcano** — baking soda + vinegar + red food coloring', '🌈 **Rainbow in a glass** — layers of different-density liquids', '🥛 **Milk glue** — milk + vinegar creates a plastic protein', '💧 **Surface tension** — how many paper clips fit in a full glass?', '🌱 **Seed in cotton wool** — watch it sprout in a glass jar', '🎨 **Milk painting** — milk + food coloring + dish soap: colors dance', '🧲 **Homemade compass** — magnetized needle in cork on water', '🫧 **Lava lamp** — oil + water + effervescent tablet', '🔭 **Giant shadows** — how shadow size changes with distance', '❄️ **Instant-freeze water** — the Mpemba effect with distilled water'] },
        { type: 'h2', text: 'Turning experiments into real learning' },
        { type: 'text', text: 'The "wow!" is just the beginning. To turn an experiment into genuine scientific learning, always ask these three questions: what do we think will happen, what actually happened, and why do you think it happened that way? That hypothesis–observation–reflection cycle is the scientific method in miniature.' },
        { type: 'text', text: 'Keep an experiment notebook where children draw or write what they observed. Over time that notebook becomes a small personal science book, and revisiting past experiments reinforces learning in a way no textbook can match.' },
      ],
    },
  },

  {
    slug: 'building-reading-habit',
    category: { es: 'Educación', en: 'Education' },
    date: '2026-04-09',
    readTime: '7 min',
    imagePrompt: 'stack of colorful childrens picture books on cozy reading nook, soft cushions, warm lamp light, small stuffed animal, wooden shelf, inviting atmosphere, no people',
    es: {
      title: 'Cómo crear el hábito de la lectura en niños que no quieren leer',
      excerpt: 'No todos los niños se enamoran de los libros de inmediato. Con las estrategias correctas y los libros adecuados, cualquier niño puede convertirse en lector apasionado.',
      content: [
        { type: 'intro', text: 'A menudo el rechazo no es a la lectura en sí, sino a los libros que se les han ofrecido. La personalización es clave: el libro correcto para el lector correcto en el momento correcto.' },
        { type: 'h2', text: 'Estrategias que funcionan' },
        { type: 'list', items: ['📖 **Lee en voz alta** — aunque sean mayores, la lectura compartida crea vínculos', '🏠 **Crea un rincón acogedor** — luz y cojines invitan a quedarse', '🎯 **Deja que elijan** — aunque sea un libro de chistes o un cómic', '⏱️ **Empieza con 10 minutos** — un objetivo pequeño es más motivador', '🌟 **Usa audiolibros y e-readers** — son lectura también', '🎁 **Llévalo a la librería** — elegir su propio libro es una experiencia especial', '👨‍👩‍👧 **Modela el hábito** — si ven que tú lees, leer se vuelve deseable'] },
        { type: 'h2', text: 'Recomendaciones por edad' },
        { type: 'list', items: ['🧒 3–5 años: "El grúfalo", "Elmer", "Adivina cuánto te quiero"', '🧑 6–8 años: "Diario de Greg", "El pequeño Nicolás", serie "Geronimo Stilton"', '👦 9–12 años: "Harry Potter", "El Hobbit", "Charlie y la fábrica de chocolate"'] },
        { type: 'h2', text: 'El ambiente importa tanto como el libro' },
        { type: 'text', text: 'Un rincón de lectura no tiene que ser caro ni elaborado. Un cojín en el suelo, una linterna y una manta son suficientes para crear un espacio que los niños asocien con placer y calma. La idea es que la lectura tenga su propio territorio especial en casa.' },
        { type: 'text', text: 'La biblioteca pública es un aliado infravalorado. Ir a elegir libros con tus hijos, participar en los clubes de lectura infantiles o simplemente pasar una tarde entre estantes es una experiencia que muchos niños recuerdan con especial cariño. Y es completamente gratuita.' },
      ],
    },
    en: {
      title: 'How to build a reading habit in kids who do not want to read',
      excerpt: 'Not every child falls in love with books right away. With the right strategies and the right books, any child can become a passionate reader.',
      content: [
        { type: 'intro', text: "Often the resistance isn't to reading itself but to the books they've been given. Personalization is key: the right book for the right reader at the right moment." },
        { type: 'h2', text: 'Strategies that work' },
        { type: 'list', items: ['📖 **Read aloud** — even with older kids, shared reading creates bonds', '🏠 **Create a cozy nook** — good light and cushions invite staying', '🎯 **Let them choose** — even if it\'s a joke book or comic', '⏱️ **Start with 10 minutes** — a small goal is more motivating', '🌟 **Use audiobooks and e-readers** — these count too', '🎁 **Take them to a bookshop** — choosing their own book is a special experience', '👨‍👩‍👧 **Model the habit** — if they see you reading, it becomes desirable'] },
        { type: 'h2', text: 'Recommendations by age' },
        { type: 'list', items: ['🧒 3–5 years: "The Gruffalo", "Elmer", "Guess How Much I Love You"', '🧑 6–8 years: "Diary of a Wimpy Kid", "Dog Man", "Captain Underpants"', '👦 9–12 years: "Harry Potter", "Percy Jackson", "Charlie and the Chocolate Factory"'] },
        { type: 'h2', text: 'Environment matters as much as the book' },
        { type: 'text', text: "A reading corner doesn't need to be expensive or elaborate. A cushion on the floor, a torch, and a blanket are enough to create a space children associate with pleasure and calm. The goal is for reading to have its own special territory at home." },
        { type: 'text', text: 'The public library is an underused ally. Taking your children to choose books, joining children\'s reading clubs, or simply spending an afternoon among shelves is an experience many children remember fondly. And it\'s completely free.' },
      ],
    },
  },

  {
    slug: 'outdoor-nature-activities',
    category: { es: 'Explorar', en: 'Explore' },
    date: '2026-04-10',
    readTime: '6 min',
    imagePrompt: 'nature treasures collection flatlay on wooden surface, colorful autumn leaves, pinecones, smooth pebbles, feathers, acorns, green moss, sunlit forest floor, macro detail',
    es: {
      title: '20 actividades al aire libre para explorar la naturaleza con tus hijos',
      excerpt: 'El contacto con la naturaleza es esencial para el desarrollo infantil. Estas actividades combinan aventura, aprendizaje y desconexión digital.',
      content: [
        { type: 'intro', text: 'Cada vez más estudios confirman lo que los abuelos ya sabían: los niños necesitan tiempo al aire libre. Reduce el estrés, mejora el estado de ánimo, fortalece el sistema inmune y desarrolla la creatividad. Y es gratis.' },
        { type: 'h2', text: '20 actividades al aire libre' },
        { type: 'list', items: ['🔍 **Exploración**: caza de bichos, búsqueda de hojas, observación de estrellas', '🏗️ **Construcción**: choza con palos, presa en un arroyo, castillos de arena', '🎨 **Arte**: pintura con tierra, mandalas de piedras, fotografía de naturaleza', '🏃 **Movimiento**: circuito de obstáculos natural, trepar árboles, carreras de relevos', '🌱 **Jardinería**: huerto en macetas, sembrar flores silvestres', '🐦 **Observación**: diario de pájaros, seguir huellas de animales', '🏕️ **Aventura**: acampada en el jardín, senderismo, orientación con brújula'] },
        { type: 'h2', text: 'Cuánto tiempo al aire libre necesitan los niños' },
        { type: 'text', text: 'La OMS recomienda al menos 60 minutos de actividad física moderada al día para niños de 5 a 17 años. Pero más allá del ejercicio, el simple hecho de estar en entornos naturales — parques, jardines, bosques — tiene efectos medibles en la reducción del cortisol (la hormona del estrés) y en la mejora del estado de ánimo.' },
        { type: 'text', text: 'No necesitas ir al campo: un parque urbano, un jardín comunitario o incluso el patio del colegio cuentan. La naturaleza no tiene que ser salvaje para ser beneficiosa — cualquier entorno con plantas, tierra y aire libre tiene efectos positivos documentados.' },
      ],
    },
    en: {
      title: '20 outdoor nature activities to explore with your kids',
      excerpt: 'Time in nature is essential for child development. These activities combine adventure, learning, and the digital detox children desperately need.',
      content: [
        { type: 'intro', text: 'Study after study confirms what grandparents always knew: children need time outdoors. It reduces stress, improves mood, strengthens the immune system, and develops creativity. And it is free.' },
        { type: 'h2', text: '20 outdoor activities' },
        { type: 'list', items: ['🔍 **Exploration**: bug hunting, leaf shape search, stargazing', '🏗️ **Building**: stick hut, stream dam, sandcastles', '🎨 **Art**: mud painting, stone mandalas, nature photography', '🏃 **Movement**: natural obstacle course, tree climbing, relay races', '🌱 **Gardening**: herb pots, planting wildflowers', '🐦 **Observation**: bird journal, animal track spotting', '🏕️ **Adventure**: backyard camping, hiking, compass orienteering'] },
        { type: 'h2', text: 'How much outdoor time do children need?' },
        { type: 'text', text: 'The WHO recommends at least 60 minutes of moderate physical activity per day for children aged 5–17. But beyond exercise, simply being in natural environments — parks, gardens, woodlands — has measurable effects on reducing cortisol (the stress hormone) and improving mood.' },
        { type: 'text', text: "You don't need to head to the countryside: an urban park, a community garden, or even a school yard all count. Nature doesn't need to be wild to be beneficial — any environment with plants, soil, and fresh air has documented positive effects." },
      ],
    },
  },

  {
    slug: 'screen-free-games',
    category: { es: 'Ocio', en: 'Leisure' },
    date: '2026-04-11',
    readTime: '5 min',
    imagePrompt: 'colorful board games, card decks, dice and game pieces spread on wooden table, warm evening light, cozy home atmosphere, overhead flat lay, vivid colors',
    es: {
      title: 'Los mejores juegos sin pantallas para niños que también gustan a los padres',
      excerpt: 'Juegos que no necesitan cargador, wifi ni batería. Solo imaginación, risas y tiempo de calidad en familia.',
      content: [
        { type: 'intro', text: 'Los juegos analógicos tienen algo que las pantallas no pueden replicar: crean conexión real, desarrollan habilidades sociales y no tienen publicidad.' },
        { type: 'h2', text: 'Juegos de mesa para toda la familia' },
        { type: 'list', items: ['🎭 **Codenames** — asociación de palabras y trabajo en equipo, desde los 10', '🃏 **Dobble** — velocidad de observación para todas las edades', '🏙️ **Carcassonne** — estrategia y construcción de mapas desde los 7', '📝 **Tabú Junior** — describir sin usar ciertas palabras, risas garantizadas', '🧩 **Dixit** — arte, imaginación y comunicación, precioso'] },
        { type: 'h2', text: 'Juegos al aire libre sin material' },
        { type: 'list', items: ['🏃 **El pañuelo** — clásico con grupos', '🙈 **Escondite inglés** — autocontrol y risas', '🤚 **Pies quietos** — pelota, nombre y velocidad de reacción', '🔊 **El teléfono estropeado** — mensajes que se tuercen'] },
        { type: 'h2', text: 'Por qué los juegos analógicos siguen siendo insuperables' },
        { type: 'text', text: 'Los juegos de mesa desarrollan habilidades que los videojuegos difícilmente pueden igualar: turnarse, aceptar la derrota con deportividad, negociar, mentir con gracia (en los juegos que lo permiten) y leer las expresiones de los demás. Son simuladores sociales en miniatura.' },
        { type: 'text', text: 'La noche de juegos en familia es uno de los rituales más fáciles de instaurar y de mayor impacto en la cohesión familiar. Una vez por semana, sin móviles, con aperitivos y permiso para quedarse despiertos un poco más de lo habitual: los niños lo esperan con verdadera ilusión.' },
      ],
    },
    en: {
      title: 'Best screen-free games for kids that parents enjoy too',
      excerpt: 'Games that need no charger, wifi, or battery. Just imagination, laughs, and quality family time.',
      content: [
        { type: 'intro', text: 'Analog games have something screens cannot replicate: they create real connection, develop social skills, and have no advertising.' },
        { type: 'h2', text: 'Board games for the whole family' },
        { type: 'list', items: ['🎭 **Codenames** — word association and teamwork, from age 10', '🃏 **Dobble (Spot It!)** — observation speed for all ages', '🏙️ **Carcassonne** — strategy and map building from age 7', '📝 **Taboo Junior** — describe without using certain words, guaranteed laughs', '🧩 **Dixit** — art, imagination, and communication, beautiful'] },
        { type: 'h2', text: 'Outdoor games with no equipment' },
        { type: 'list', items: ['🏃 **Capture the Flag** — classic group game', '🙈 **Grandmother\'s Footsteps** — self-control and laughs', '🤚 **Four Corners** — movement and reaction speed', '🔊 **Chinese Whispers** — messages that get gloriously mangled'] },
        { type: 'h2', text: 'Why analog games are still unbeatable' },
        { type: 'text', text: "Board games develop skills that video games can rarely match: taking turns, accepting defeat graciously, negotiating, bluffing (in games that allow it), and reading other people's expressions. They are social simulators in miniature." },
        { type: 'text', text: 'Family game night is one of the easiest rituals to establish and one of the highest-impact for family cohesion. Once a week, no phones, with snacks and permission to stay up a little later than usual — children genuinely look forward to it.' },
      ],
    },
  },

  {
    slug: 'learning-languages-young',
    category: { es: 'Educación', en: 'Education' },
    date: '2026-04-12',
    readTime: '8 min',
    imagePrompt: 'colorful language learning flashcards spread on white desk, small globe, multilingual alphabet letters, pencils, bright natural light, top-down view, vibrant saturated colors',
    es: {
      title: 'Cómo aprender un segundo idioma desde pequeño: guía para padres',
      excerpt: 'La ventana de oportunidad para aprender idiomas es real y poderosa. Todo lo que necesitas saber para aprovecharla sin presionar a tus hijos.',
      content: [
        { type: 'intro', text: 'Los niños que aprenden un segundo idioma antes de los 7 años lo adquieren de forma más natural y con menos esfuerzo. La clave no es la cantidad de horas, sino la calidad de la exposición.' },
        { type: 'h2', text: 'Métodos que funcionan en casa' },
        { type: 'list', items: ['📺 **Cambia el idioma de los dibujos** — Netflix y YouTube permiten cambiar el audio', '🎵 **Música en el idioma objetivo** — una de las formas más poderosas de adquirir vocabulario', '📚 **Libros bilingües** — el mismo cuento en dos idiomas fija el vocabulario', '🤝 **Clases con nativos online** — iTalki y Preply tienen profesores para niños', '🎮 **Apps de idiomas** — Duolingo, Lingokids o Gus on the Go para 4–10 años', '👨‍👩‍👧 **Un padre, un idioma** — si hablas otro idioma, úsalo exclusivamente con tu hijo'] },
        { type: 'h2', text: 'Los errores son parte del proceso' },
        { type: 'text', text: 'Uno de los mayores obstáculos al aprendizaje de idiomas es el miedo a equivocarse. Los niños pequeños no tienen ese miedo: prueban, mezclan los idiomas y siguen adelante. Ese atrevimiento es su mayor ventaja. Nunca corrijas cada error — celebra el intento y modela la forma correcta de forma natural.' },
        { type: 'text', text: 'La consistencia importa más que la intensidad. Quince minutos al día de exposición real (una canción, un capítulo de dibujos, una conversación) son infinitamente más efectivos que una clase semanal de dos horas sin continuidad en casa.' },
      ],
    },
    en: {
      title: 'How to learn a second language young: a parent\'s guide',
      excerpt: 'The window of opportunity for language learning is real and powerful. Everything you need to know to make the most of it without putting pressure on your kids.',
      content: [
        { type: 'intro', text: 'Children who learn a second language before age 7 acquire it more naturally and with less effort. The key is not quantity of hours but quality of exposure.' },
        { type: 'h2', text: 'Methods that work at home' },
        { type: 'list', items: ['📺 **Switch the language on cartoons** — Netflix and YouTube let you change audio language', '🎵 **Music in the target language** — one of the most powerful ways to acquire vocabulary', '📚 **Bilingual books** — the same story in two languages anchors vocabulary', '🤝 **Online classes with native speakers** — iTalki and Preply have teachers for kids', '🎮 **Language apps** — Duolingo, Lingokids, or Gus on the Go for ages 4–10', '👨‍👩‍👧 **One parent, one language** — if you speak another language, use it exclusively with your child'] },
        { type: 'h2', text: 'Mistakes are part of the process' },
        { type: 'text', text: 'One of the biggest obstacles to language learning is fear of making mistakes. Young children don\'t have that fear: they try, mix up languages, and keep going. That boldness is their greatest advantage. Never correct every error — celebrate the attempt and naturally model the correct form.' },
        { type: 'text', text: 'Consistency matters more than intensity. Fifteen minutes a day of real exposure — a song, a cartoon episode, a short conversation — is infinitely more effective than a two-hour weekly class with no follow-through at home.' },
      ],
    },
  },

  {
    slug: 'sensory-play-toddlers',
    category: { es: 'Ocio', en: 'Leisure' },
    date: '2026-03-10',
    readTime: '5 min',
    imagePrompt: 'colorful sensory play bin close-up, kinetic sand, water beads, small scoops and toys, bright saturated colors, macro texture shot, overhead view, vivid playroom light',
    es: {
      title: 'Juego sensorial para bebés y toddlers: beneficios y 8 ideas fáciles',
      excerpt: 'El juego sensorial es fundamental en los primeros años de vida. Estas ideas no requieren materiales especiales y mantienen a los más pequeños fascinados durante horas.',
      content: [
        { type: 'intro', text: 'El juego sensorial estimula el desarrollo cognitivo, emocional y motor de los bebés y niños pequeños. Tocar, oler, escuchar y explorar texturas diferentes construye las conexiones neuronales fundamentales.' },
        { type: 'h2', text: '8 ideas de juego sensorial fáciles' },
        { type: 'list', items: ['🌊 **Bandeja de agua** — recipientes, embudos y cucharas para explorar', '🌾 **Arroz teñido** — arroz de colores para hundir las manos', '🎨 **Pintura de dedos** — la conexión más directa entre creatividad y manos', '🌿 **Caja de naturaleza** — hojas, piedras, piñas y cortezas para tocar', '🧊 **Cubitos de colores** — hielo con colorante para observar cómo se derrite', '🧁 **Masas sensoriales** — masa de sal, arcilla, slime casero', '🪶 **Texturas contrastadas** — telas ásperas, suaves, rugosas y lisas', '🔊 **Botellas de sonido** — mismos botes con diferentes rellenos'] },
        { type: 'h2', text: 'Consejos de seguridad e higiene' },
        { type: 'text', text: 'El juego sensorial puede ser desordenado — ¡y eso es parte de la magia! Para minimizar el caos sin perder la diversión: extiende una lona o sábana vieja bajo la zona de juego, viste al niño con ropa que puedas manchar y acota el espacio con una bandeja grande o piscina pequeña de plástico.' },
        { type: 'text', text: 'Supervisa siempre a bebés y niños menores de 3 años durante el juego sensorial, especialmente con materiales pequeños que puedan llevarse a la boca. El arroz, las lentejas y las semillas son seguros pero no aptos para niños que aún chupan todo lo que encuentran.' },
      ],
    },
    en: {
      title: 'Sensory play for babies and toddlers: benefits and 8 easy ideas',
      excerpt: 'Sensory play is fundamental in the first years of life. These ideas require no special materials and keep the youngest ones fascinated for hours.',
      content: [
        { type: 'intro', text: 'Sensory play stimulates cognitive, emotional, and motor development in babies and young children. Touching, smelling, hearing, and exploring different textures builds foundational neural connections.' },
        { type: 'h2', text: '8 easy sensory play ideas' },
        { type: 'list', items: ['🌊 **Water sensory bin** — containers, funnels, and spoons to explore', '🌾 **Dyed rice** — colored rice to plunge hands into', '🎨 **Finger painting** — the most direct connection between creativity and hands', '🌿 **Nature box** — leaves, stones, pine cones, and bark to touch', '🧊 **Colored ice cubes** — food-colored ice to watch melt', '🧁 **Sensory doughs** — salt dough, clay, homemade slime', '🪶 **Contrasting textures** — rough, soft, bumpy, and smooth fabrics', '🔊 **Sound bottles** — same containers with different fillings'] },
        { type: 'h2', text: 'Safety and hygiene tips' },
        { type: 'text', text: "Sensory play can get messy — and that's part of the magic! To minimize chaos without losing the fun: spread an old sheet under the play area, dress the child in clothes that can get stained, and contain the space using a large tray or small plastic paddling pool." },
        { type: 'text', text: 'Always supervise babies and children under 3 during sensory play, especially with small materials they might put in their mouths. Rice, lentils, and seeds are safe sensory materials but are not suitable for children who still mouth everything they find.' },
      ],
    },
  },

  {
    slug: 'music-movement-kids',
    category: { es: 'Ocio', en: 'Leisure' },
    date: '2026-03-18',
    readTime: '5 min',
    imagePrompt: 'colorful childrens musical instruments flatlay, xylophone, maracas, small drum, tambourine, rainbow colors, bright sunny floor, overhead view, vivid and cheerful',
    es: {
      title: 'Música y movimiento: cómo la música desarrolla el cerebro de tu hijo',
      excerpt: 'La música no es solo entretenimiento: desarrolla el lenguaje, la coordinación, la memoria y la inteligencia emocional. Y lo mejor: puedes practicarla en casa sin saber música.',
      content: [
        { type: 'intro', text: 'Investigaciones en neurociencia confirman que la música activa más áreas del cerebro simultáneamente que cualquier otra actividad. Los niños que aprenden música desarrollan mejor el lenguaje, la concentración y las habilidades sociales.' },
        { type: 'h2', text: 'Actividades musicales por edad' },
        { type: 'list', items: ['👶 0–2 años: canciones de cuna, palmitas, danzas suaves en brazos', '🧒 3–5 años: xilófono, pandero, canciones con gestos', '🧑 6–8 años: recorder (flauta escolar), ritmos con percusión corporal', '👦 9–12 años: guitarra, piano, producción musical básica con apps'] },
        { type: 'h2', text: 'Sin instrumentos también funciona' },
        { type: 'list', items: ['🥁 **Percusión corporal** — palmas, rodillas y pies como instrumentos', '🎵 **Karaoke en casa** — la voz es el instrumento más accesible', '🎼 **Escucha activa** — identificar instrumentos en canciones conocidas', '💃 **Danza libre** — mover el cuerpo con intención musical'] },
        { type: 'h2', text: '¿A qué edad empezar con clases de música?' },
        { type: 'text', text: 'El oído musical se desarrolla desde el nacimiento, pero la mayoría de los expertos sugieren esperar hasta los 5-6 años para empezar con clases formales de instrumento. Antes de esa edad, la estimulación musical informal — canciones, ritmos, escucha activa — es más beneficiosa que la disciplina técnica.' },
        { type: 'text', text: 'El piano y la guitarra son los instrumentos más polivalentes para empezar porque transfieren mejor a otros instrumentos. La flauta de pico (recorder) es la opción económica por excelencia para iniciarse en la lectura musical sin inversión importante.' },
      ],
    },
    en: {
      title: 'Music and movement: how music develops your child\'s brain',
      excerpt: "Music isn't just entertainment: it develops language, coordination, memory, and emotional intelligence. And the best part: you can practice it at home without knowing how to play.",
      content: [
        { type: 'intro', text: "Neuroscience research confirms that music activates more brain areas simultaneously than any other activity. Children who learn music develop better language, concentration, and social skills." },
        { type: 'h2', text: 'Music activities by age' },
        { type: 'list', items: ['👶 0–2 years: lullabies, clapping games, gentle dancing in arms', '🧒 3–5 years: xylophone, tambourine, songs with gestures', '🧑 6–8 years: recorder, body percussion rhythms', '👦 9–12 years: guitar, piano, basic music production with apps'] },
        { type: 'h2', text: 'No instruments needed' },
        { type: 'list', items: ['🥁 **Body percussion** — claps, knees, and feet as instruments', '🎵 **Home karaoke** — the voice is the most accessible instrument', '🎼 **Active listening** — identify instruments in well-known songs', '💃 **Free dance** — moving the body with musical intention'] },
        { type: 'h2', text: 'What age to start music lessons?' },
        { type: 'text', text: 'Musical hearing develops from birth, but most experts suggest waiting until ages 5–6 to begin formal instrument lessons. Before that age, informal musical stimulation — songs, rhythms, active listening — is more beneficial than technical discipline.' },
        { type: 'text', text: 'Piano and guitar are the most versatile instruments to start with because skills transfer well to other instruments. The recorder is the classic budget option for beginning to read music without a major investment.' },
      ],
    },
  },

  {
    slug: 'mindfulness-kids',
    category: { es: 'Bienestar', en: 'Wellness' },
    date: '2026-03-28',
    readTime: '6 min',
    imagePrompt: 'peaceful meditation corner setup, soft cushion, small plant, smooth stones, candle, natural light from window, serene minimalist interior, calm neutral tones, no people',
    es: {
      title: 'Mindfulness para niños: técnicas para calmar la mente y gestionar emociones',
      excerpt: 'El mindfulness infantil reduce la ansiedad, mejora la concentración y ayuda a los niños a manejar sus emociones. Estas técnicas simples se pueden practicar en cualquier momento del día.',
      content: [
        { type: 'intro', text: 'La atención plena no es solo para adultos. Los niños que aprenden a pausar y observar sus pensamientos y emociones desarrollan mayor resiliencia y bienestar emocional a largo plazo.' },
        { type: 'h2', text: '5 técnicas fáciles para practicar' },
        { type: 'list', items: ['🌬️ **Respiración de la flor** — inhala como si olieras una flor, exhala como si apagas una vela', '🖐️ **Respiración de los 5 dedos** — sigue el contorno de la mano al respirar', '👁️ **5-4-3-2-1** — nombra 5 cosas que ves, 4 que tocas, 3 que oyes, 2 que hueles, 1 que saboreas', '🧘 **Meditación del globo** — imagina que el abdomen es un globo al respirar', '🌊 **Escáner corporal** — recorrer mentalmente el cuerpo de pies a cabeza'] },
        { type: 'h2', text: 'Cuándo practicarlo' },
        { type: 'list', items: ['Antes de un examen o situación estresante', 'Cuando el niño está enfadado o ansioso', 'Como ritual de buenos días o buenas noches', 'Después de actividad física intensa'] },
        { type: 'h2', text: 'Mindfulness no es relajación: es atención' },
        { type: 'text', text: 'El mindfulness no consiste en estar tranquilo o callado — consiste en prestar atención al momento presente sin juzgarlo. Un niño que observa con curiosidad cómo se siente un cubo de hielo en sus manos está practicando mindfulness. No necesitas una app ni una esterilla.' },
        { type: 'text', text: 'Los estudios del Mindfulness in Schools Project demuestran que incluso 10 minutos de práctica diaria durante 8 semanas produce mejoras medibles en la concentración, la regulación emocional y el bienestar general de los niños. El impacto es comparable al de 20 minutos de ejercicio físico.' },
      ],
    },
    en: {
      title: 'Mindfulness for kids: techniques to calm the mind and manage emotions',
      excerpt: 'Mindfulness for children reduces anxiety, improves concentration, and helps kids handle their emotions. These simple techniques can be practiced at any time of day.',
      content: [
        { type: 'intro', text: "Mindfulness isn't just for adults. Children who learn to pause and observe their thoughts and emotions develop greater resilience and long-term emotional wellbeing." },
        { type: 'h2', text: '5 easy techniques to practice' },
        { type: 'list', items: ['🌬️ **Flower breathing** — inhale as if smelling a flower, exhale as if blowing out a candle', '🖐️ **Five finger breathing** — trace the outline of the hand while breathing', '👁️ **5-4-3-2-1** — name 5 things you see, 4 you touch, 3 you hear, 2 you smell, 1 you taste', '🧘 **Balloon meditation** — imagine the belly is a balloon when breathing', '🌊 **Body scan** — mentally travel through the body from feet to head'] },
        { type: 'h2', text: 'When to practice' },
        { type: 'list', items: ['Before a test or stressful situation', 'When the child is angry or anxious', 'As a morning or bedtime ritual', 'After intense physical activity'] },
        { type: 'h2', text: "Mindfulness is not relaxation — it's attention" },
        { type: 'text', text: "Mindfulness is not about being calm or quiet — it's about paying attention to the present moment without judging it. A child who curiously notices what an ice cube feels like in their hands is practicing mindfulness. You need no app or mat." },
        { type: 'text', text: 'Research from the Mindfulness in Schools Project shows that even 10 minutes of daily practice over 8 weeks produces measurable improvements in concentration, emotional regulation, and general wellbeing in children. The impact is comparable to 20 minutes of physical exercise.' },
      ],
    },
  },

  {
    slug: 'creative-play-ages-3-5',
    category: { es: 'Manualidades', en: 'Crafts' },
    date: '2026-04-13',
    readTime: '6 min',
    imagePrompt: 'colorful finger painting art supplies flatlay, open paint pots in rainbow colors, painted paper with swirls, brushes, sponges, bright white table, overhead view, vivid saturated',
    es: {
      title: 'Juego creativo para niños de 3 a 5 años: guía completa',
      excerpt: 'Los años preescolares son una ventana de oro para la creatividad. Estas actividades están perfectamente calibradas para manos pequeñas e imaginaciones enormes.',
      content: [
        { type: 'intro', text: 'Los niños de 3 a 5 años están en una etapa mágica: su imaginación es ilimitada pero su atención es corta. La clave son actividades fáciles de preparar, sensorialmente atractivas y abiertas — sin resultado correcto ni incorrecto.' },
        { type: 'h2', text: '12 actividades perfectas para esta edad' },
        { type: 'list', items: ['🎨 **Pintura de dedos** — la conexión más directa entre creatividad y manos', '🧱 **DUPLO libre** — sin instrucciones, solo imaginación', '🎭 **Caja de disfraces** — ropa vieja, sombreros y accesorios', '🌊 **Juego de agua** — recipientes, embudos y cucharas', '🌿 **Collage de naturaleza** — pegar hojas, flores y piedras en papel', '🎵 **Instrumentos caseros** — botes con arroz o pasta sellados', '🏠 **Ciudad de plastilina** — amasar, construir y demoler', '📖 **Piedras de historia** — pinta imágenes en piedras y cuéntalas', '🖍️ **Dibujo en el suelo** — papel grande pegado con cinta y lápices grandes', '🫧 **Burbujas** — solución casera y varitas de distintas formas', '🧪 **Mezcla de colores** — colores primarios en agua: ¿qué pasa?', '🍃 **Frotados de hojas** — hoja bajo papel + cera = arte instantáneo'] },
        { type: 'h2', text: 'Por qué el juego abierto importa más que el resultado' },
        { type: 'text', text: 'A los 3-5 años, el valor de una actividad no está en el resultado final sino en el proceso: tomar decisiones, probar, equivocarse y seguir. Resiste la tentación de "mejorar" el dibujo de tu hijo o mostrarle "la forma correcta". Tu papel es facilitar, no dirigir.' },
        { type: 'text', text: 'Conserva algunas de las creaciones aunque parezcan simples garabatos. En unos años, esos dibujos serán uno de los recuerdos más valiosos de la infancia — para ellos y para ti.' },
      ],
    },
    en: {
      title: 'Creative play for ages 3 to 5: the complete guide',
      excerpt: 'The preschool years are a golden window for creativity. These activities are perfectly calibrated for little hands and enormous imaginations.',
      content: [
        { type: 'intro', text: "Children aged 3–5 are at a magical stage: imagination is limitless but attention span is short. The key is activities that are quick to set up, sensorially engaging, and open-ended — with no right or wrong outcome." },
        { type: 'h2', text: '12 perfect activities for this age' },
        { type: 'list', items: ['🎨 **Finger painting** — the most direct connection between creativity and hands', '🧱 **Free DUPLO play** — no instructions, just imagination', '🎭 **Dress-up box** — old clothes, hats, and accessories', '🌊 **Water play** — containers, funnels, and spoons', '🌿 **Nature collage** — glue leaves, petals, and stones onto paper', '🎵 **Homemade instruments** — sealed containers filled with rice or pasta', '🏠 **Playdough city** — roll, build, and demolish', '📖 **Story stones** — paint images on stones and tell stories with them', '🖍️ **Giant floor drawing** — large paper taped down with chunky crayons', '🫧 **Bubbles** — homemade solution and wands of different shapes', '🧪 **Color mixing** — primary colors in water: what happens?', '🍃 **Leaf rubbings** — leaf under paper + crayon = instant art'] },
        { type: 'h2', text: 'Why open-ended play matters more than the result' },
        { type: 'text', text: "At ages 3–5, the value of an activity is not in the end result but in the process: making decisions, trying, making mistakes, and continuing. Resist the urge to 'improve' your child's drawing or show them 'the right way'. Your role is to facilitate, not direct." },
        { type: 'text', text: 'Keep some of the creations even if they look like simple scribbles. In a few years, those drawings will be among the most treasured memories of childhood — for them and for you.' },
      ],
    },
  },

  {
    slug: 'stem-activities-home',
    category: { es: 'Educación', en: 'Education' },
    date: '2026-03-30',
    readTime: '6 min',
    imagePrompt: 'colorful LEGO bricks and building blocks spread on bright floor, gears, wheels, half-built construction, engineering toys, overhead flat lay, vivid primary colors',
    es: {
      title: 'Actividades STEM en casa: ciencia, tecnología, ingeniería y matemáticas sin aburrir',
      excerpt: 'El pensamiento STEM se desarrolla desde pequeño con actividades cotidianas. Estas ideas despiertan la curiosidad científica sin necesidad de laboratorio ni materiales especiales.',
      content: [
        { type: 'intro', text: 'STEM no es solo para el colegio. La mentalidad de explorar, probar, fallar y probar de nuevo se puede cultivar en casa desde los 3 años con materiales sencillos.' },
        { type: 'h2', text: 'Proyectos STEM por categoría' },
        { type: 'list', items: ['🔬 **Ciencia**: volcanes, cristales de sal, papel de tornasol casero con repollo rojo', '⚙️ **Ingeniería**: construir el puente más resistente con palillos y gominolas', '💻 **Tecnología**: Scratch Jr para programar animaciones desde los 5 años', '📐 **Matemáticas**: geometría con tangram, origami, puzzles espaciales'] },
        { type: 'h2', text: 'El error como parte del proceso' },
        { type: 'text', text: 'Lo más valioso de los proyectos STEM es que enseñan a fallar sin drama. Cuando el puente se cae, el niño aprende a analizar por qué y probar de nuevo — una habilidad que vale más que cualquier respuesta correcta.' },
        { type: 'h2', text: 'Recursos gratuitos para ampliar el aprendizaje STEM' },
        { type: 'text', text: 'Khan Academy Kids (gratis, en inglés y español) ofrece contenido de matemáticas y lógica adaptado por edades. Scratch y Scratch Jr son herramientas de programación visual gratuitas del MIT que funcionan en navegador, sin instalación. Para ciencias, el canal de YouTube "Mark Rober" tiene experimentos increíbles que inspiran a niños y adultos por igual.' },
        { type: 'text', text: 'La curiosidad es el recurso STEM más importante, y no tiene precio. Cuando un niño pregunta "¿por qué?" ante cualquier fenómeno cotidiano, eso es ciencia en su estado más puro. Tu respuesta ideal no es darle la respuesta, sino decir "¿y tú qué crees? ¿cómo podríamos comprobarlo?".' },
      ],
    },
    en: {
      title: 'STEM activities at home: science, tech, engineering, and math made fun',
      excerpt: 'STEM thinking develops from a young age through everyday activities. These ideas spark scientific curiosity without needing a lab or special materials.',
      content: [
        { type: 'intro', text: "STEM isn't just for school. The mindset of exploring, testing, failing, and trying again can be cultivated at home from age 3 with simple materials." },
        { type: 'h2', text: 'STEM projects by category' },
        { type: 'list', items: ['🔬 **Science**: volcanoes, salt crystals, homemade pH paper with red cabbage', '⚙️ **Engineering**: build the strongest bridge using toothpicks and marshmallows', '💻 **Technology**: Scratch Jr for coding animations from age 5', '📐 **Math**: tangram geometry, origami, spatial puzzles'] },
        { type: 'h2', text: 'Failure as part of the process' },
        { type: 'text', text: "The most valuable thing about STEM projects is that they teach children to fail without drama. When the bridge collapses, the child learns to analyze why and try again — a skill worth more than any correct answer." },
        { type: 'h2', text: 'Free resources to extend STEM learning' },
        { type: 'text', text: 'Khan Academy Kids (free, in English and Spanish) offers age-adapted math and logic content. Scratch and Scratch Jr are free visual programming tools from MIT that run in the browser with no installation. For science inspiration, Mark Rober\'s YouTube channel features incredible experiments that inspire children and adults alike.' },
        { type: 'text', text: 'Curiosity is the most important STEM resource, and it has no price. When a child asks "why?" about any everyday phenomenon, that is science in its purest form. The ideal response is not to give them the answer, but to say "what do you think? How could we find out?"' },
      ],
    },
  },

  {
    slug: 'gardening-with-kids',
    category: { es: 'Explorar', en: 'Explore' },
    date: '2026-04-03',
    readTime: '5 min',
    imagePrompt: 'small terracotta pots with seedlings on sunny windowsill, watering can, seed packets, gardening trowel, fresh soil, green sprouts, warm afternoon light, close-up',
    es: {
      title: 'Jardinería con niños: cómo crear un huerto en casa (con balcón o sin él)',
      excerpt: 'Cultivar una planta enseña a los niños responsabilidad, paciencia y el ciclo de la vida. Y no necesitas jardín: un alféizar de ventana es suficiente para empezar.',
      content: [
        { type: 'intro', text: 'La jardinería con niños no es solo plantar semillas: es desarrollar la responsabilidad, conectar con los ciclos naturales y entender de dónde vienen los alimentos. Y la satisfacción de comer lo que has cultivado tú mismo no tiene precio.' },
        { type: 'h2', text: 'Por dónde empezar según el espacio' },
        { type: 'list', items: ['🪟 **Alféizar**: albahaca, menta, cebollino — crecen rápido y huelen bien', '🪣 **Balcón**: tomates cherry, fresas, lechugas en macetas grandes', '🌱 **Jardín o patio**: huerto completo con turnos de riego y desherbado', '🧪 **Interior**: germinador de legumbres, jardín de cristal, terrario'] },
        { type: 'h2', text: 'Plantas ideales para empezar con niños' },
        { type: 'list', items: ['🌻 Girasol — crece rápido y es espectacular', '🍓 Fresas — las pueden comer directamente de la planta', '🌿 Albahaca — la ven crecer y la usan en la cocina', '🥕 Rabanitos — listos en solo 25 días'] },
        { type: 'h2', text: 'Cómo mantener la motivación cuando las plantas tardan' },
        { type: 'text', text: 'La jardinería es una lección de paciencia, pero los niños pequeños necesitan recompensas visibles. Los rabanitos (25 días) y las microgreens (7-10 días) son ideales para empezar porque los resultados son casi inmediatos. Una vez que experimentan el éxito de su primera cosecha, la motivación para cuidar plantas más lentas se multiplica.' },
        { type: 'text', text: 'Crea un diario de crecimiento: cada semana, el niño mide la planta y dibuja o fotografía su estado. Ver la progresión semana a semana convierte la espera en un proyecto de observación científica activo y enormemente satisfactorio.' },
      ],
    },
    en: {
      title: 'Gardening with kids: how to create a home garden (with or without a yard)',
      excerpt: "Growing a plant teaches children responsibility, patience, and the cycle of life. And you don't need a garden — a windowsill is enough to start.",
      content: [
        { type: 'intro', text: "Gardening with children isn't just about planting seeds: it develops responsibility, connects them with natural cycles, and teaches where food comes from. And the satisfaction of eating what you've grown yourself is priceless." },
        { type: 'h2', text: 'Where to start based on your space' },
        { type: 'list', items: ['🪟 **Windowsill**: basil, mint, chives — fast-growing and fragrant', '🪣 **Balcony**: cherry tomatoes, strawberries, lettuce in large pots', '🌱 **Garden or patio**: full vegetable plot with watering and weeding turns', '🧪 **Indoor**: sprout jar, glass garden, terrarium'] },
        { type: 'h2', text: 'Best plants to start with kids' },
        { type: 'list', items: ['🌻 Sunflower — fast-growing and spectacular', '🍓 Strawberries — can eat directly from the plant', '🌿 Basil — they watch it grow and use it in cooking', '🥕 Radishes — ready in just 25 days'] },
        { type: 'h2', text: 'Keeping motivation alive when plants take time' },
        { type: 'text', text: 'Gardening is a lesson in patience, but young children need visible rewards. Radishes (25 days) and microgreens (7–10 days) are perfect for beginners because results are nearly immediate. Once they experience their first harvest success, motivation to care for slower plants multiplies.' },
        { type: 'text', text: "Create a growth journal: each week, the child measures the plant and draws or photographs its state. Seeing the week-by-week progression turns the waiting period into an active scientific observation project — and an enormously satisfying one." },
      ],
    },
  },

  {
    slug: 'healthy-bedtime-routine',
    category: { es: 'Bienestar', en: 'Wellness' },
    date: '2026-04-06',
    readTime: '6 min',
    imagePrompt: 'cozy children bedroom nightstand with open storybook, soft warm lamp glow, small stuffed animals, smooth bed sheets, peaceful evening atmosphere, no people',
    es: {
      title: 'Rutina de noche para niños: cómo crear una transición al sueño que funcione',
      excerpt: 'Una rutina de sueño consistente mejora la calidad del descanso, reduce los conflictos a la hora de acostarse y hace que los niños duerman más tranquilos.',
      content: [
        { type: 'intro', text: 'El cerebro de los niños responde muy bien a las rutinas predecibles. Cuando la misma secuencia de actividades se repite cada noche, el cuerpo empieza a prepararse para dormir de forma automática.' },
        { type: 'h2', text: 'Rutina de 30 minutos por edad' },
        { type: 'list', items: ['👶 0–2 años: baño tibio → pijama → canción de cuna → cuna', '🧒 3–5 años: baño → pijama → cuento → breve charla del día → luces apagadas', '🧑 6–8 años: higiene → lectura propia o compartida → respiración → buenas noches', '👦 9–12 años: higiene → lectura → diario o gratitud del día → sin pantallas 1h antes'] },
        { type: 'h2', text: 'Señales de que la rutina funciona' },
        { type: 'list', items: ['El niño pide la rutina él mismo', 'Se duerme antes de los 20 minutos', 'Se levanta descansado y de buen humor', 'Hay menos conflictos en el proceso'] },
        { type: 'h2', text: 'Lo que no deberías hacer antes de dormir' },
        { type: 'text', text: 'La luz azul de las pantallas suprime la producción de melatonina (la hormona del sueño) hasta 3 horas. Los pediatras recomiendan apagar todas las pantallas al menos 60 minutos antes de la hora de dormir. Sustituye ese tiempo por lectura, charla tranquila o la rutina de higiene.' },
        { type: 'text', text: 'La temperatura de la habitación también importa: entre 18 y 20 grados es el rango óptimo para el sueño infantil. Una habitación demasiado caliente dificulta conciliar el sueño y reduce la calidad del descanso profundo.' },
      ],
    },
    en: {
      title: 'Healthy bedtime routine for kids: how to create a sleep transition that works',
      excerpt: 'A consistent bedtime routine improves sleep quality, reduces bedtime conflicts, and helps children sleep more soundly.',
      content: [
        { type: 'intro', text: "Children's brains respond very well to predictable routines. When the same sequence of activities is repeated every night, the body starts preparing for sleep automatically." },
        { type: 'h2', text: '30-minute routine by age' },
        { type: 'list', items: ['👶 0–2 years: warm bath → pajamas → lullaby → crib', '🧒 3–5 years: bath → pajamas → story → brief chat about the day → lights off', '🧑 6–8 years: hygiene → solo or shared reading → breathing exercise → good night', '👦 9–12 years: hygiene → reading → journal or gratitude → no screens 1h before'] },
        { type: 'h2', text: 'Signs the routine is working' },
        { type: 'list', items: ['The child requests the routine themselves', 'Falls asleep within 20 minutes', 'Wakes up rested and in a good mood', 'Fewer conflicts during the process'] },
        { type: 'h2', text: 'What not to do before bed' },
        { type: 'text', text: 'The blue light from screens suppresses melatonin (the sleep hormone) for up to 3 hours. Paediatricians recommend switching off all screens at least 60 minutes before bedtime. Replace that time with reading, calm conversation, or the hygiene routine.' },
        { type: 'text', text: 'Room temperature also matters: between 18 and 20 degrees Celsius is the optimal range for children\'s sleep. A room that is too warm makes it harder to fall asleep and reduces the quality of deep rest.' },
      ],
    },
  },

  {
    slug: 'emotional-intelligence-kids',
    category: { es: 'Educación', en: 'Education' },
    date: '2026-04-07',
    readTime: '7 min',
    imagePrompt: 'colorful emotion cards and feelings chart spread on floor, heart-shaped objects, small journal, crayons, soft natural light, overhead flat lay, warm pastel tones',
    es: {
      title: 'Cómo desarrollar la inteligencia emocional en niños: actividades y conversaciones',
      excerpt: 'La inteligencia emocional es el predictor más fiable del éxito y el bienestar en la vida adulta. Estas actividades y preguntas ayudan a desarrollarla desde pequeños.',
      content: [
        { type: 'intro', text: 'Un niño que sabe nombrar lo que siente, gestionar sus impulsos y empatizar con los demás tiene una ventaja enorme en la vida. Y esta habilidad se puede enseñar y entrenar.' },
        { type: 'h2', text: 'Actividades para desarrollar la inteligencia emocional' },
        { type: 'list', items: ['😊 **Rueda de emociones** — un póster con emociones y caras para identificar cómo se sienten', '📖 **Libros sobre emociones** — personajes que sienten y gestionan sus sentimientos', '🎭 **Juego de rol** — representar situaciones conflictivas y buscar soluciones', '📓 **Diario emocional** — escribir o dibujar cómo se han sentido cada día', '🌡️ **Termómetro emocional** — ¿del 1 al 10 cómo de tranquilo/enfadado estás?'] },
        { type: 'h2', text: 'Preguntas que abren conversaciones' },
        { type: 'list', items: ['¿Cómo te has sentido hoy?', '¿Qué fue lo más difícil del día?', '¿Qué harías diferente si pudieras repetirlo?', '¿Cómo crees que se sentía la otra persona?'] },
        { type: 'h2', text: 'El papel del adulto en el desarrollo emocional' },
        { type: 'text', text: 'Los niños aprenden a gestionar emociones principalmente por observación. Si ven a sus padres manejar la frustración con calma, pedir disculpas cuando se equivocan o hablar abiertamente de cómo se sienten, esas son las lecciones de inteligencia emocional más poderosas que pueden recibir.' },
        { type: 'text', text: 'No existe la "emoción incorrecta": la ira, el miedo y la tristeza son tan válidos como la alegría. Nuestro rol no es eliminar las emociones difíciles sino ayudar al niño a reconocerlas, expresarlas de forma apropiada y encontrar sus propias estrategias de regulación.' },
      ],
    },
    en: {
      title: 'How to develop emotional intelligence in kids: activities and conversations',
      excerpt: "Emotional intelligence is the most reliable predictor of success and wellbeing in adult life. These activities and questions help develop it from an early age.",
      content: [
        { type: 'intro', text: "A child who can name what they feel, manage their impulses, and empathize with others has an enormous advantage in life. And this skill can be taught and practiced." },
        { type: 'h2', text: 'Activities to develop emotional intelligence' },
        { type: 'list', items: ['😊 **Emotion wheel** — a poster with emotions and faces to identify how they feel', '📖 **Books about emotions** — characters who feel and manage their feelings', '🎭 **Role play** — act out conflicting situations and find solutions', '📓 **Emotion journal** — write or draw how they felt each day', '🌡️ **Emotion thermometer** — on a scale of 1 to 10, how calm or upset are you?'] },
        { type: 'h2', text: 'Questions that open conversations' },
        { type: 'list', items: ['How did you feel today?', 'What was the hardest part of your day?', 'What would you do differently if you could repeat it?', 'How do you think the other person felt?'] },
        { type: 'h2', text: "The adult's role in emotional development" },
        { type: 'text', text: "Children learn to manage emotions primarily through observation. When they see their parents handle frustration calmly, apologize when they are wrong, or speak openly about how they feel, those are the most powerful emotional intelligence lessons they can receive." },
        { type: 'text', text: "There is no such thing as a 'wrong emotion': anger, fear, and sadness are just as valid as joy. Our role is not to eliminate difficult emotions but to help children recognize them, express them appropriately, and find their own regulation strategies." },
      ],
    },
  },

  {
    slug: 'travel-activities-kids',
    category: { es: 'Ocio', en: 'Leisure' },
    date: '2026-04-04',
    readTime: '5 min',
    imagePrompt: 'travel flatlay on bright surface, childrens travel toys, small backpack, colorful map, snacks, headphones, activity book, passport, adventure accessories, overhead view',
    es: {
      title: 'Actividades para niños en viajes: cómo sobrevivir al aeropuerto y los trayectos largos',
      excerpt: 'Los viajes con niños pueden ser agotadores o divertidos — depende de la preparación. Estas ideas convierten las esperas y trayectos en momentos de juego y aprendizaje.',
      content: [
        { type: 'intro', text: 'El secreto de los viajes en familia no está en llegar al destino, sino en disfrutar el camino. Con unas pocas ideas y materiales mínimos, incluso el aeropuerto puede ser un parque de atracciones.' },
        { type: 'h2', text: 'Ideas para el trayecto (sin pantallas)' },
        { type: 'list', items: ['🎒 **Mochila mágica** — déjale preparar su propia mochila con libros, juguetes pequeños y snacks', '🔢 **Bingo de viaje** — ficha con cosas a encontrar por el camino (vaca, semáforo, etc.)', '📖 **Cuaderno de viaje** — dibujar o anotar todo lo que ven', '🎯 **20 preguntas** — uno piensa en algo y los demás hacen preguntas con respuesta sí/no', '🗺️ **Copiloto de mapas** — que sigan la ruta en un mapa real o de papel', '🎵 **Spotify playlist del viaje** — música por países que van a visitar', '🧩 **Juegos de palabras** — basta, ahorcado, categorías'] },
        { type: 'h2', text: 'En el aeropuerto' },
        { type: 'list', items: ['Conta los aviones que ven por la ventana', 'Busca 10 objetos de distintos colores en la terminal', 'Inventa historias sobre los otros viajeros'] },
        { type: 'h2', text: 'Qué meter en la mochila de viaje del niño' },
        { type: 'text', text: 'Menos es más: una mochila pequeña con 3-4 cosas elegidas por el propio niño funciona mejor que una bolsa llena de opciones. Los esenciales: un cuaderno pequeño con lápices de colores, un libro o audiolibro, y un juego de cartas compacto como Dobble o un mazo de naipes. Evita los juguetes con muchas piezas pequeñas.' },
        { type: 'text', text: 'Los viajes son oportunidades de aprendizaje únicas: leer los paneles del aeropuerto, contar el cambio en otra moneda, reconocer idiomas o banderas. Involucra a los niños en la logística del viaje — entender el itinerario, seguir el vuelo en el mapa — y el trayecto se convierte en una clase de geografía experiencial.' },
      ],
    },
    en: {
      title: 'Activities for kids while traveling: how to survive airports and long journeys',
      excerpt: 'Traveling with children can be exhausting or fun — it depends on preparation. These ideas turn waits and journeys into play and learning moments.',
      content: [
        { type: 'intro', text: "The secret of family travel isn't about reaching the destination, but enjoying the journey. With a few ideas and minimal materials, even the airport can become an amusement park." },
        { type: 'h2', text: 'Journey ideas (screen-free)' },
        { type: 'list', items: ['🎒 **Magic backpack** — let them pack their own with small toys, books, and snacks', '🔢 **Travel bingo** — card with things to spot along the way (cow, traffic light, etc.)', '📖 **Travel journal** — draw or note everything they see', '🎯 **20 questions** — one thinks of something, others ask yes/no questions', '🗺️ **Map co-pilot** — follow the route on a real or paper map', '🎵 **Journey playlist** — music from countries they will visit', '🧩 **Word games** — categories, hangman, alphabet names'] },
        { type: 'h2', text: 'At the airport' },
        { type: 'list', items: ['Count the planes they can see through the window', 'Find 10 objects of different colors in the terminal', 'Invent stories about other travelers'] },
        { type: 'h2', text: "What to pack in the child's travel bag" },
        { type: 'text', text: "Less is more: a small backpack with 3–4 things chosen by the child themselves works better than a bag full of options. Essentials: a small notebook with colored pencils, a book or audiobook, and a compact card game like Dobble or a regular deck of cards. Avoid toys with lots of small pieces." },
        { type: 'text', text: "Travel offers unique learning opportunities: reading airport signs, counting change in a foreign currency, recognizing languages or flags. Involve children in travel logistics — understanding the itinerary, following the flight on a map — and the journey becomes a hands-on geography lesson." },
      ],
    },
  },

  {
    slug: 'holiday-crafts-kids',
    category: { es: 'Manualidades', en: 'Crafts' },
    date: '2026-04-02',
    readTime: '5 min',
    imagePrompt: 'holiday craft supplies flatlay, glitter, colored paper, ribbon, scissors, half-finished ornaments, pine branches, festive table, overhead view, bright cheerful colors',
    es: {
      title: 'Manualidades navideñas y de temporada: 10 ideas para hacer en familia',
      excerpt: 'Las manualidades estacionales crean recuerdos y tradiciones familiares que duran toda la vida. Estas ideas son fáciles, económicas y perfectas para todas las edades.',
      content: [
        { type: 'intro', text: 'Las manualidades de temporada tienen un poder especial: conectan a los niños con el ritmo del año y crean rituales familiares que esperan con ilusión. No hace falta gastar mucho — lo que importa es hacerlas juntos.' },
        { type: 'h2', text: '10 ideas para cada época del año' },
        { type: 'list', items: ['🍂 **Otoño**: corona de hojas secas, animales de castaña, linterna de papel reciclado', '❄️ **Invierno/Navidad**: bolas de papel maché, tarjetas pop-up, muñecos de nieve de calcetín', '🌸 **Primavera**: macetas de semillas de regalo, móvil de flores de papel', '☀️ **Verano**: atrapasueños, cuadros de arena y conchas, velas de parafina'] },
        { type: 'h2', text: 'Cómo convertirlo en tradición' },
        { type: 'list', items: ['Reserva un fin de semana fijo al año para cada manualidad', 'Guarda las creaciones para comparar cómo mejoran cada año', 'Regala las manualidades a abuelos y amigos — refuerza el valor del esfuerzo'] },
        { type: 'h2', text: 'Materiales básicos que siempre deberías tener en casa' },
        { type: 'text', text: 'Para que las manualidades de temporada sean espontáneas y no requieran un viaje a la tienda, mantén un kit básico siempre disponible: tijeras de punta redonda, pegamento en barra y líquido, pinturas de dedos, rotuladores lavables, papel de colores, cartulinas, limpiapipas, purpurina (acepta el caos), y cinta adhesiva de varios colores.' },
        { type: 'text', text: 'Las manualidades estacionales tienen un valor pedagógico adicional: conectan a los niños con el ciclo natural del año, las tradiciones culturales y el trabajo con las manos. En un mundo cada vez más digital, hacer algo físico con tus propias manos y regalarlo tiene un peso emocional que ningún objeto comprado puede replicar.' },
      ],
    },
    en: {
      title: 'Holiday and seasonal crafts for kids: 10 family ideas',
      excerpt: 'Seasonal crafts create memories and family traditions that last a lifetime. These ideas are easy, affordable, and perfect for all ages.',
      content: [
        { type: 'intro', text: "Seasonal crafts have special power: they connect children to the rhythm of the year and create family rituals they look forward to eagerly. You don't need to spend a lot — what matters is doing them together." },
        { type: 'h2', text: '10 ideas for every season' },
        { type: 'list', items: ['🍂 **Autumn**: dried leaf wreath, chestnut animals, recycled paper lantern', '❄️ **Winter/Christmas**: papier-mâché baubles, pop-up cards, sock snowmen', '🌸 **Spring**: seed planting pots as gifts, paper flower mobile', '☀️ **Summer**: dream catchers, sand and shell art, paraffin candles'] },
        { type: 'h2', text: 'How to turn it into a tradition' },
        { type: 'list', items: ['Reserve a fixed weekend each year for each craft', 'Keep the creations to compare how they improve each year', 'Gift the crafts to grandparents and friends — reinforces the value of effort'] },
        { type: 'h2', text: 'Basic materials to always have at home' },
        { type: 'text', text: "For seasonal crafts to be spontaneous — without requiring a trip to the shops — keep a basic kit always available: round-tipped scissors, glue stick and liquid glue, finger paints, washable markers, colored paper, card stock, pipe cleaners, glitter (accept the chaos), and tape in several colors." },
        { type: 'text', text: "Seasonal crafts carry additional educational value: they connect children to the natural cycle of the year, cultural traditions, and hands-on work. In an increasingly digital world, making something physical with your own hands and giving it away carries emotional weight that no bought object can replicate." },
      ],
    },
  },

  {
    slug: 'paper-crafts-origami',
    category: { es: 'Manualidades', en: 'Crafts' },
    date: '2026-03-12',
    readTime: '5 min',
    imagePrompt: 'colorful origami paper squares in rainbow colors, small finished origami crane and frog, folding lines visible, bright white background, overhead flat lay, clean minimal',
    es: {
      title: 'Origami para niños: beneficios y las 5 figuras más fáciles para empezar',
      excerpt: 'El origami desarrolla concentración, motricidad fina y geometría espacial. Solo necesitas papel y ganas de explorar. Estas figuras sencillas son perfectas para empezar.',
      content: [
        { type: 'intro', text: 'El origami es una de las actividades más completas para niños: sin tijeras, sin pegamento, solo papel y paciencia. Y los beneficios van mucho más allá de las figuras bonitas.' },
        { type: 'h2', text: 'Por qué el origami es tan valioso' },
        { type: 'list', items: ['✋ Desarrolla la motricidad fina y la precisión manual', '🧠 Trabaja la geometría espacial de forma práctica', '😌 Mejora la concentración y la paciencia', '🎁 Las creaciones son regalos perfectos', '📐 Introduce simetría, fracciones y ángulos de forma natural'] },
        { type: 'h2', text: '5 figuras perfectas para empezar' },
        { type: 'list', items: ['🐦 **Pajarita** — la figura clásica, perfecta desde los 6 años', '🐸 **Rana saltadora** — favorita de los niños, ¡salta de verdad!', '🚢 **Barco** — solo 3 dobleces, ideal para los más pequeños', '💌 **Sobre de carta** — funcional y elegante, desde los 5 años', '🦊 **Zorro** — sencillo y reconocible, muy satisfactorio de hacer'] },
        { type: 'h2', text: 'Consejos para empezar bien' },
        { type: 'text', text: 'El papel adecuado marca la diferencia: el papel de origami (kami) es delgado y mantiene el doblez sin arrugarse. Para empezar, sirven cuadrados de 15×15 cm. Con niños muy pequeños, usa papel más grande (20×20) porque es más fácil de manejar. Evita el papel de periódico o las hojas de cuaderno, que se desgarran.' },
        { type: 'text', text: 'La paciencia es la habilidad principal que trabaja el origami. Si el niño se frustra, no fuerces: deja la figura a medias y retómala otro día. La rana saltadora puede llevar varios intentos antes de funcionar, y eso es exactamente el punto — perseverar tiene su recompensa.' },
      ],
    },
    en: {
      title: 'Origami for kids: benefits and the 5 easiest folds to start with',
      excerpt: 'Origami develops concentration, fine motor skills, and spatial geometry. All you need is paper and curiosity. These simple figures are perfect for beginners.',
      content: [
        { type: 'intro', text: "Origami is one of the most complete activities for children: no scissors, no glue, just paper and patience. And the benefits go far beyond the pretty figures." },
        { type: 'h2', text: 'Why origami is so valuable' },
        { type: 'list', items: ['✋ Develops fine motor skills and manual precision', '🧠 Practices spatial geometry hands-on', '😌 Improves concentration and patience', '🎁 Creations make perfect gifts', '📐 Introduces symmetry, fractions, and angles naturally'] },
        { type: 'h2', text: '5 perfect figures to start with' },
        { type: 'list', items: ['🐦 **Paper crane** — the classic, perfect from age 6', '🐸 **Jumping frog** — a favourite, it really jumps!', '🚢 **Boat** — just 3 folds, ideal for little ones', '💌 **Envelope** — functional and elegant, from age 5', '🦊 **Fox** — simple and recognizable, very satisfying to make'] },
        { type: 'h2', text: 'Tips for a good start' },
        { type: 'text', text: 'The right paper makes a real difference: origami paper (kami) is thin and holds the fold without wrinkling. 15×15 cm squares are the standard starting size. With very young children, use larger squares (20×20) because they are easier to handle. Avoid newspaper or notebook paper, which tears.' },
        { type: 'text', text: "Patience is the main skill origami trains. If the child gets frustrated, don't push: leave the figure half-done and come back to it another day. The jumping frog can take several attempts before it works — and that's exactly the point. Perseverance has its reward." },
      ],
    },
  },

  {
    slug: 'active-play-movement',
    category: { es: 'Bienestar', en: 'Wellness' },
    date: '2026-03-05',
    readTime: '5 min',
    imagePrompt: 'colorful outdoor sports equipment flatlay on green grass, jump rope, hula hoop, soft ball, cones, bright sunny day, vibrant saturated colors, overhead view',
    es: {
      title: 'Juego activo para niños: por qué el movimiento importa tanto como el estudio',
      excerpt: 'El juego activo no es solo quemar energía: desarrolla el sistema nervioso, mejora el aprendizaje y fortalece la salud mental de los niños. Ideas para cada día.',
      content: [
        { type: 'intro', text: 'La OMS recomienda al menos 60 minutos de actividad física al día para niños de 5 a 17 años. No hace falta ir al gimnasio: el juego activo en casa o el parque es igual de eficaz.' },
        { type: 'h2', text: 'Beneficios del juego activo' },
        { type: 'list', items: ['🧠 Mejora la concentración y la memoria — el ejercicio activa la proteína del aprendizaje', '😴 Regula el sueño y reduce la hiperactividad', '💪 Fortalece músculos, huesos y sistema cardiovascular', '😊 Reduce la ansiedad y mejora el estado de ánimo', '🤝 Desarrolla habilidades sociales al jugar en grupo'] },
        { type: 'h2', text: 'Ideas para cada día' },
        { type: 'list', items: ['🏃 **Circuito de obstáculos** — sillas, cojines y túneles de mantas', '🎯 **Tiro al blanco** — pelotas blandas y dianas de papel', '💃 **Flash dance** — pausa de baile de 5 minutos', '🏐 **Catch en el pasillo** — una pelota blanda y espacio libre', '🧗 **Montaña de cojines** — escalar y saltar sin salir de casa'] },
        { type: 'h2', text: 'El movimiento y el aprendizaje están conectados' },
        { type: 'text', text: 'Investigaciones en neurociencia demuestran que el ejercicio físico estimula la producción de BDNF (factor neurotrófico derivado del cerebro), una proteína que favorece la creación de nuevas neuronas y la formación de conexiones. En términos prácticos: los niños aprenden mejor cuando se mueven. Un recreo activo mejora el rendimiento en la clase siguiente.' },
        { type: 'text', text: 'No hace falta que el movimiento sea organizado ni largo. Cinco minutos de saltar, bailar o hacer flexiones entre tarea y tarea tienen efectos documentados en la concentración y la motivación. Integrar el movimiento en las rutinas de aprendizaje es una de las estrategias más sencillas y efectivas que puede adoptar una familia.' },
      ],
    },
    en: {
      title: 'Active play for kids: why movement matters as much as studying',
      excerpt: "Active play is not just about burning energy: it develops the nervous system, improves learning, and strengthens children's mental health. Ideas for every day.",
      content: [
        { type: 'intro', text: "The WHO recommends at least 60 minutes of physical activity per day for children aged 5–17. No gym needed: active play at home or in the park is just as effective." },
        { type: 'h2', text: 'Benefits of active play' },
        { type: 'list', items: ['🧠 Improves concentration and memory — exercise activates the learning protein', '😴 Regulates sleep and reduces hyperactivity', '💪 Strengthens muscles, bones, and cardiovascular system', '😊 Reduces anxiety and improves mood', '🤝 Develops social skills when playing in groups'] },
        { type: 'h2', text: 'Ideas for every day' },
        { type: 'list', items: ['🏃 **Indoor obstacle course** — chairs, cushions, blanket tunnels', '🎯 **Target practice** — soft balls and paper targets', '💃 **Flash dance** — 5-minute dance break', '🏐 **Hallway catch** — soft ball and open space', '🧗 **Cushion mountain** — climb and jump without leaving home'] },
        { type: 'h2', text: 'Movement and learning are connected' },
        { type: 'text', text: 'Neuroscience research shows that physical exercise stimulates the production of BDNF (brain-derived neurotrophic factor), a protein that supports the creation of new neurons and the formation of connections. In practical terms: children learn better when they move. An active break improves performance in the next lesson.' },
        { type: 'text', text: "Movement doesn't need to be structured or lengthy. Five minutes of jumping, dancing, or doing push-ups between homework tasks has documented effects on concentration and motivation. Integrating movement into learning routines is one of the simplest and most effective strategies a family can adopt." },
      ],
    },
  },
];

// ─── HELPERS ─────────────────────────────────────────────────────────────────

export function getArticleInLang(article, lang = 'es') {
  const content = article[lang] || article.es;
  const seed = article.slug.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0) % 9999;
  const basePrompt = encodeURIComponent(
    article.imagePrompt + ', professional product photography, vibrant saturated colors, bright natural light, sharp focus, no people, no faces, no text, no logos, no watermarks, clean background'
  );

  const imageUrl     = `https://image.pollinations.ai/prompt/${basePrompt}?width=800&height=450&nologo=true&seed=${seed}`;
  const heroImageUrl = `https://image.pollinations.ai/prompt/${basePrompt}?width=1200&height=675&nologo=true&seed=${seed}`;

  return {
    slug: article.slug,
    category: article.category[lang] || article.category.es,
    date: article.date,
    readTime: article.readTime,
    imageUrl,
    heroImageUrl,
    ...content,
  };
}

export function getAllArticlesInLang(lang = 'es') {
  return articles.map(a => getArticleInLang(a, lang));
}

export function getArticleBySlug(slug) {
  return articles.find(a => a.slug === slug) || null;
}

export function getAllSlugs() {
  return articles.map(a => a.slug);
}
