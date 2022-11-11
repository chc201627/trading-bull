const getMonth = () => {
  const date = new Date();
  const months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];
  const month = date.getMonth();
  return `${months[month]}`;
};

const es = {
  clientNav: {
    Home: 'Inicio',
    About: 'Sobre Nosotros',
    FAQs: 'Soporte',
    login: 'Iniciar sesión',
    signup: 'Registrarse',
  },
  home: {
    hero: {
      content1: 'El Primer Portafolio ',
      content2: 'PAMM Descentralizado',
      content3: 'exclusivo para miembros de nuestra comunidad',
      description: 'Únete a nuestro Club de trading y gane de los mejores traders de Forex del mundo',
      powerBy: 'Potenciado por:',
      seeSpotsAvailable: 'Mira los cupos disponibles',
    },
    scopeData: {
      title: 'ALCANCE & DATA',
      description: 'Alcanza tu metas de crecimiento con',
      card0Description: 'Sistemas de Trading Rentables PAMM ',
      card1Description: 'Meses con una APY superior al 8,5% mensual y una desviación estándar del 3% ',
      card2Description: 'Suscriptores activos a las estrategias PAMM ',
    },
    blockchain: {
      title: 'Blockchain',
      description1: `Streak Bull es una`,
      description2: 'Billetera No-Custodiada para',
      description3: 'USDT',
      description4: 'en la red',
      description5: 'Blockchain de Tron',
      seeDetails: 'Más información',
    },
    spots: {
      title: 'Cupo',
      options: 'Opciones de',
      invest: 'Inversión',
      tradingSpot: {
        title: 'TRADING.SPOT',
        goal: 'Meta',
        lacking_amount: 'Monto faltante',
        inversation_rate: 'Tasa de inversión',
        rentability: 'Rentabilidad',
        total_investors: 'Inversores Totales',
        deposits_buy: 'Deposits Buy',
        next_activation: 'Siguiente Activación',
        learn_more: 'Conoce mas',
      },
    },
    invest: {
      title: 'Invertir',
      description1: 'Las ventajas del mundo',
      description2: 'crypto',
      description3: 'en trading',
      caption:
        'Aquí puede invertir USDT en las estrategias PAMM  desde que se convierte en un miembro con una gran cantidad de beneficios :',
      skill0: 'Notificaciones para los próximos cupos disponibes',
      skill1: 'Acceso al programa de referidos',
      skill2: 'Acceso prioritario a nuevos beneficios en la plataforma',
    },
    refererProgram: {
      title: 'PROGRAMA DE REFERIDOS',
      content1: 'Beneficios de',
      content2: 'introducir a tus amigos',
      description:
        'Usted será un invitado en eventos especiales, conferencias y tener acceso a contenido educativo para mejorar su rendimiento comercial, mientras que enriquece a su círculo social.',
      detail1: '*Trading Positions: Posiciones disponibles en cupo.',
      detail2: '*Acciones compartidas dependerá del rendimiento del Trading Position y el tiempo de la inversión',
      steps: [
        {
          label: 'Obtén el código de referido para un miembro',
          description: `For each ad campaign that you create, you can control how much
                            you're willing to spend on clicks and conversions, which networks
                            and geographical locations you want your ads to show on, and more.`,
        },
        {
          label: 'Enviaselo a tus conocidos y que se registren en la plataforma',
          description: 'An ad group contains one or more ads which target a shared set of keywords.',
        },
        {
          label: 'Haz que compren un trading chair*  por  $1,000 dolarés en los cupos abiertos',
          description: `Try out different ad text to see what brings in the most customers,
                            and learn how to enhance your ads using features like ad extensions.
                            If you run into any problems with your ads, find out how to tell if
                            they're running and how to resolve approval issues.`,
        },
        {
          label: 'Obtén adicionalmente 1.5% - 2.0%* de comisiones por cada compra de tus referidos',
          description: `Try out different ad text to see what brings in the most customers,
                            and learn how to enhance your ads using features like ad extensions.
                            If you run into any problems with your ads, find out how to tell if
                            they're running and how to resolve approval issues.`,
        },
      ],
    },
    faqs: {
      title: 'Preguntas frecuentes',
      questions: [
        {
          title: '¿Qué es un sistema PAMM?',
          answer:
            'El módulo de administración de asignación de porcentaje, también conocido como administración de asignación de porcentaje de dinero o PAMM, es una forma de comercio de divisas de dinero agrupado. Un inversor puede asignar su dinero en la proporción deseada a los comerciantes/administradores de dinero de su elección.',
        },
        {
          title: '¿Cuales pueden ser los riesgos?',
          answer:
            'El comercio de divisas conlleva un alto riesgo debido al apalancamiento y la volatilidad del mercado, invierte siempre lo que puedas permitirte perder.',
        },
        {
          title: '¿Puede revisar el histórico de las operaciones?',
          answer:
            'El libro de negociación se administra en la Mesa de negociación de reequilibrio que no se muestra en la plataforma, sin embargo, el usuario puede ver los índices de asignación como cuando invierte en un ETF, así como el AUM.',
        },
        {
          title: '¿Como manejan mis datos?',
          answer:
            'Streak Bull no captura ningún dato del usuario, solo la información de la blockchain de su billetera y sus transacciones.',
        },
        {
          title: '¿Hay alguna garantía sobre la cripto invertida?',
          answer:
            'Debido a la naturaleza del entorno de inversión de alto riesgo de Forex, Streak Bull no garantiza ningún rendimiento pasado como un retorno futuro, usted está comprando una parte de una cartera de dinero para el comercio en Forex, materias primas e índices, el valor de la cartera puede variar con el tiempo.',
        },
        {
          title: '¿Cual es la reducción máxima o Drawdown ?',
          answer:
            'El Drawdown o reducción máximo en un día ha sido del 15 %, el drawdown medio por operación es del 0,75 % con un VaR del 1 % por operación.',
        },
        {
          title: '¿Cual es la influencia de las posiciones?',
          answer: 'Puede variar entre los diferentes PAMMS pero la media es de 500.',
        },
      ],
      form: {
        need_help: '¿Necesitas Ayuda? Escribenos',
        name: 'Nombre',
        email: 'Correo',
        subject: 'Asunto',
        enter_message: 'Escribe tu mensaje aqui',
        submit: 'Enviar',
      },
    },
    disclaimer: {
      title: 'Aviso Legal',
      description1: 'Riesgos y',
      description2: 'Advertencias',
      caption1:
        'Este sitio web no está dirigido a ninguna jurisdicción y no está destinado a ningún uso que sea contrario a la ley o regulación local.',
      caption2:
        'Advertencia de riesgo: El comercio de productos apalancados como Forex puede no ser adecuado para todos los inversores, ya que conllevan un grado de riesgo para su capital. Asegúrese de que comprende completamente los riesgos involucrados, teniendo en cuenta sus objetivos de inversión y el nivel de experiencia, antes de operar y, si es necesario, busque asesoramiento independiente.',
    },
  },
  dashboard: {
    title: 'Dashboard',
    home: {
      news: {
        title: 'Novedades',
        cardTitle: 'Nuevos cupos disponibles',
        cardContent: `${getMonth()} viene con muchas sorpresas, incluyendo nuevos cupos, mensuales y anuales. ¡Echa un vistazo!`,
        action: 'Ir ahora',
      },
      totalInvestments: {
        title: 'Inversiones',
        periods: ['Todo', 'Año', '6 meses', '3 meses', '1 mes'],
      },
      earnings: {
        title: 'Ganancias Totales',
        value: 'Valor',
        rentability: 'Rentabilidad',
        lastUpdate: 'Última actualización :',
        lastDeposit: 'Depósitos totales ',
        expectedReturn: 'Retorno esperado ',
        depositStatus: 'Estatus',
      },
    },
    spot: {
      amount_invest: 'Capital Administrado',
      deposits_available: 'Depósitos disponibles',
      inversation_rate: 'Tasa de inversión',
      rentability: 'ROI',
      rate_per_month: 'Bloqueo Mensual',
      rate_per_year: 'Bloqueo Anual',
      investment_type: 'Tipo de inversión',
      sector: 'Sector',
      amount_to_invest: 'Monto a invertir',
      investment_value: 'Valor de inversión',
      block_periods: 'Periodos de bloqueo',
      month: 'Un Mes',
      year: 'Un Año',
      // modal state -  pending
      please_confirm: 'Por favor! Confirma tu inversión',
      total_to_pay: 'Total a Pagar',
      commision_alert: 'Debes pagar una comisión del 3% en cada nuevo depósito',
      make_you_invest: 'Haz tu inversion',
      // modal state -  confirming
      time_remaining: 'Tiempo restante',
      minutes: 'Minutos',
      seconds: 'Segundos',
      your_invert: 'Tu inversion',
      have_issue: '¿Presentas algún problema? Puedes continuar la transacción de forma externa con el QR de arriba',
      cancel_order: 'Cancelar orden',
      // modal state - confirmed
      confirm_title: '¡Nueva inversión enviada correctamente!.',
      confirm_message:
        'Por favor, tenga en cuenta, su inversión se verá reflejada en 3 dias hábiles después del envío de este mensaje. Después de eso, revise la sección de posiciones en su perfil.',
      return_profile: 'Return profile',
      // modal state - cancelled
      cancelled_title: 'Inversión cancelada! Cuentanos que pasó',
      send_return_profile: 'Send & Return Profile',
    },
  },
  login: {
    welcome: 'Hola, ¡Bienvenido de nuevo!',
    title: 'Iniciar sesión',
    message: 'Inicia sesión para acceder a tu cuenta',
    alert: 'Asegúrate de que tienes la extensión de TronLink instalada y conectada a la red principal de Tron...',
    button: 'Iniciar sesión con TronLink',
    registerMessage: '¿No tienes una cuenta?',
    registerAction: 'Regístrate',
  },
  wallet: {
    title: 'Billetera',
    wallet: 'Billetera',
    wallet_status: 'Estado de billetera',
    destination: 'Destino',
    network: 'Red',
    status: {
      connected: 'Conectado',
    },
    movements: {
      title: 'Movimientos',
      spotValue: 'Valor Spot',
      previousBalance: 'Balance Previo',
      hash: 'Hash',
      earnsGenerata: 'Ganancias Generadas',
      earnsBeneficiary: 'Ganancias x beneficiarios',
      earnsTotal: 'Ganancias totales',
      transactionDate: 'Fecha transacción',
      type: ' Tipo',
    },
    navigation: {
      history: 'Movimiento histórico de transacciones',
      openButton: 'Abrir Tronscan',
      signOut: 'Salir',
    },
  },
  refers: {
    title: 'Referidos',
    refers: 'Referidos',
    refer_program: 'Programa de referidos',
    balance: {
      total_return: 'Retorno total de referidos',
      total_return_alert: 'Este es el dinero que recibirá cada mes por cada referencia',
      total_refers: 'Número total de referidos',
      total_refers_alert: 'Número de personas referidas desde su cuenta',
      alert_code: 'Este código tiene una duración de 24 horas, y no puede utilizarse más de una vez',
      generate_code: 'Generar Código',
      generate_link: 'Generar Link',
    },
    referredDetails: {
      title: 'Detalles de Referidos',
      id: '#',
      expectReturned: 'Retorno Referido',
      spotValue: 'Valor Spot',
      enbaleDate: 'Fecha Activación',
      offDate: 'Vencimiento',
      status: 'Estado',
    },
    details: {},
  },
  goBack: 'Volver',
  invest: 'Invertir',
};

export default es;
