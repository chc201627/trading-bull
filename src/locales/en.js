const getMonth = () => {
  const date = new Date();
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const month = date.getMonth();
  return `${months[month]}`;
};

const en = {
  clientNav: {
    Home: 'Home',
    About: 'About us',
    FAQs: 'FAQs',
    login: 'Login',
    signup: 'Sign up',
  },
  home: {
    hero: {
      content1: 'The First Decentralized',
      content2: 'PAMM portfolio exclusive',
      content3: 'for members of our community',
      description: 'Join our trading Club and earn from the best FX traders in the world',
      powerBy: 'POWER BY:',
      seeSpotsAvailable: 'See spots available',
    },
    scopeData: {
      title: 'SCOPE AND DATA',
      description: 'Achieve your growth goals with',
      card0Description: 'PAMM Profitable Trading Systems ',
      card1Description: 'Months with an APY greater than 8.5% monthly and an standard deviation of 3% ',
      card2Description: 'Active subscribers to the PAMM strategies ',
    },
    blockchain: {
      title: 'Blockchain',
      description1: `Streak Bull is a`,
      description2: 'Non-Custodial Wallet for',
      description3: 'USDT',
      description4: 'in the',
      description5: 'Tron Blockchain',
      seeDetails: 'See details',
    },
    spots: {
      title: 'Spot',
      options: 'Options',
      invest: 'Invest',
      tradingSpot: {
        title: 'TRADING.SPOT',
        goal: 'Goal',
        lacking_amount: 'Lacking amount',
        inversation_rate: 'Inversation Rate',
        rentability: 'Rentability',
        total_investors: 'Total Investors',
        deposits_buy: 'Deposits Buy',
        next_activation: 'Next Activation',
        learn_more: 'Learn more',
      },
    },
    invest: {
      title: 'Invest',
      description1: 'The advantage of',
      description2: 'crypto',
      description3: 'in trading',
      caption: 'Here you can Invest USDT in the PAMM strategies once you become a member with a lot of benefits :',
      skill0: 'Notifations of the next trading positions',
      skill1: 'Referral Program access',
      skill2: 'Prior Access to new offers in the platform',
    },
    refererProgram: {
      title: 'REFERRAL PROGRAM',
      content1: 'Benefits for',
      content2: 'introducing your friends',
      description: `You'll be a guest in special events, conferences and have access to educational content to enhance your trading performance while you enrich your social circle.`,
      detail1: '*Trading Positions: Positions in a portfolio monthly.',
      detail2: '*Shares boughts will depend on the performance of the trading position and the time of the investment.',
      steps: [
        {
          label: 'Get the refer code membership for a member',
          description: `For each ad campaign that you create, you can control how much
                            you're willing to spend on clicks and conversions, which networks
                            and geographical locations you want your ads to show on, and more.`,
        },
        {
          label: 'Create a wallet or Registe it in the platform',
          description: 'An ad group contains one or more ads which target a shared set of keywords.',
        },
        {
          label: 'Buy a trading chair*  $1,000 dollars in portfolio monthly',
          description: `Try out different ad text to see what brings in the most customers,
                            and learn how to enhance your ads using features like ad extensions.
                            If you run into any problems with your ads, find out how to tell if
                            they're running and how to resolve approval issues.`,
        },
        {
          label: 'Get an additional 1.5% - 2.0%* of the Shares bought by your referred members ',
          description: `Try out different ad text to see what brings in the most customers,
                            and learn how to enhance your ads using features like ad extensions.
                            If you run into any problems with your ads, find out how to tell if
                            they're running and how to resolve approval issues.`,
        },
      ],
    },
    faqs: {
      title: 'Frequently asked questions',
      questions: [
        {
          title: 'What is a PAMM System?',
          answer:
            'Percentage allocation management module, also known as percentage allocation money management or PAMM, is a form of pooled money forex trading. An investor gets to allocate their money in the desired proportion to the qualified trader(s)/money manager(s) of their choice.',
        },
        {
          title: 'What can be the risks?',
          answer:
            'Fx trading carries a high risk due to leverage and market volatility, always invest what you can afford to lose.',
        },
        {
          title: 'Can you review the history of the operations?',
          answer:
            'The trading book is managed in the Rebalancing Trading Desk which is not displayed in the platform, however user can see allocation ratios as when investing in an ETF, as well as the AUM.',
        },
        {
          title: 'How do you handle my data?',
          answer:
            'No user data is captured nor managed by Streak Bull, only the blockchain information of your wallet and its transactions.',
        },
        {
          title: 'Is there any guarantee on the crypto invested?',
          answer:
            'Due to the nature of the high risk investment environment of Forex, Trading Bull does not guarantee any past performance as a future return, you’re buying a Share of a portfolio of money to trade in Forex, Commodities and Indices, the portfolio value may vary over the time.',
        },
        {
          title: 'What is the Max drawdown?',
          answer:
            'The max Drawdown in a day has been 67% the average drawdown per trade is 0.75% with a VaR of 1% per trade.',
        },
        {
          title: `What's the leverage of the positions?`,
          answer: 'It may vary between the different PAMMS but the average is 500.',
        },
      ],
      form: {
        need_help: `Haven't found the right help? Write us`,
        name: 'Name',
        email: 'Email',
        subject: 'Subject',
        enter_message: 'Enter your message here',
        submit: 'Submit Now',
      },
    },
    disclaimer: {
      title: 'Disclaimer',
      description1: 'Risks and',
      description2: 'warnings',
      caption1:
        'This website is not directed at any jurisdiction and is not intended for any use that would be contrary to local law or regulation.',
      caption2:
        'Risk Warning: Trading leveraged products such as Forex may not be suitable for all investors as they carry a degree of risk to your capital. Please ensure that you fully understand the risks involved, taking into account your investments objectives and level of experience, before trading, and if necessary seek independent advice.',
    },
  },
  login: {
    welcome: 'Hi, Welcome back!',
    title: 'Sign in',
    message: 'Sign in to your account',
    alert: 'Make sure you have the TronLink extension installed and connected to the Tron Mainnet Network...',
    button: 'Sign in with TronLink',
    registerMessage: 'Don’t have an account?',
    registerAction: 'Get started',
  },
  register: {
    pageCaption: 'You are to near to be part of a poweful investor community',
    title: 'Put the code of your refer partner',
    description:
      'This community only allow verify members to connect with other members. Please write your code refer.',
    faqs: 'Don’t you have a refer code? See our FAQs page',
    goToFaqs: 'Go to FAQs',
    referCode: 'Referral Code',
    register: 'Register',
    errorCodeRequired: 'Referral code required',
  },
  dashboard: {
    title: 'Dashboard',
    home: {
      news: {
        title: 'News',
        cardTitle: 'New Spots Available',
        cardContent: `${getMonth()} comes with many surprises, including new Spots, monthly and annual. Let's take a look!`,
        action: 'Go Now',
      },
      totalInvestments: {
        title: 'Total Investments',
        periods: ['All time', 'Year', '6 months', '3 months', '1 month'],
      },
      earnings: {
        title: 'Total Earnings',
        value: 'Value',
        rentability: 'Rentability',
        lastUpdate: 'Last update at:',
        lastDeposit: 'All deposit',
        expectedReturn: 'Expected return',
        depositStatus: 'Status',
      },
    },
    refers: {
      title: 'Refers',
    },
    spot: {
      amount_invest: 'Amount Invest',
      deposits_available: 'Deposits available',
      inversation_rate: 'Inversation rate',
      rentability: 'ROI',
      rate_per_month: 'Monthly Block',
      rate_per_year: 'Yearly Block',
      investment_type: 'Investment type',
      sector: 'Sector',
      investment_value: 'Investment value',
      amount_to_invest: 'Amount to invest',
      block_periods: 'Block periods',
      month: 'A month',
      year: 'A year',
      // modal state -  pending
      please_confirm: 'Please! Confirm your investment',
      total_to_pay: 'Total to pay',
      commision_alert: 'You must pay a 3% commision in each new deposit',
      make_you_invest: 'Make your Invest',
      // modal state -  confirming
      time_remaining: 'Time remaining',
      minutes: 'Minutes',
      seconds: 'Seconds',
      your_invert: 'Your invert',
      have_issue: 'Are you having any issue? You can continue the transaction externally using the QR code above',
      cancel_order: 'Cancel order',
      // modal state - confirmed
      confirm_title: 'New investment succesfully sent!',
      confirm_message:
        'Please, take note,  your inversion will be reflected 3 business days after this message send. After that check your spots section in your profile',
      return_profile: 'Return profile',
      // modal state - cancelled
      cancelled_title: 'Investment Cancelled! Let us know, What Happened',
      send_return_profile: 'Send & Return Profile',
    },
  },

  wallet: {
    title: 'Wallet',
    wallet: 'Wallet',
    wallet_status: 'Wallet Status',
    destination: 'Destination',
    network: 'Network',
    status: {
      connected: 'Connected',
    },
    movements: {
      title: 'Movements',
      spotValue: 'Spot Value',
      previousBalance: 'Previous Balance',
      hash: 'Hash',
      earnsGenerata: 'Earns Generate',
      earnsBeneficiary: 'Earns Beneficiary',
      earnsTotal: 'Earns Total',
      transactionDate: 'Transaction date',
      type: ' Type',
    },
    navigation: {
      history: 'Transaction Movements History',
      openButton: 'Open Tronscan',
      signOut: 'Sign out',
    },
  },
  refers: {
    title: 'Refers',
    refers: 'Refers',
    refer_program: 'Refers Program',
    balance: {
      total_return: 'Total return for refers',
      total_return_alert: 'This is money you will get each month for every refer',
      total_refers: 'Total refers',
      total_refers_alert: 'Last 30 days of refers link to the plattform by your code',
      alert_code: 'This code have a duration of 24 hours and cannot be used twice or more times',
      generate_code: 'Generate Code',
      generate_link: 'Generate Link',
    },
    referredDetails: {
      title: 'Referred Details',
      id: '#',
      expectReturned: 'Expected money returned',
      spotValue: 'Spot value',
      enbaleDate: 'Enable date',
      offDate: 'Expiration',
      status: 'Status',
    },
    details: {},
  },
  demo: {
    title: `English`,
    introduction: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
  },
  docs: {
    hi: `Hi`,
    description: `Need help? \n Please check our docs.`,
    documentation: `documentation`,
  },
  invest: 'Invest',
  app: `app`,
  user: `user`,
  list: `list`,
  edit: `edit`,
  shop: `shop`,
  blog: `blog`,
  post: `post`,
  mail: `mail`,
  chat: `chat`,
  cards: `cards`,
  posts: `posts`,
  create: `create`,
  kanban: `kanban`,
  general: `general`,
  banking: `banking`,
  booking: `booking`,
  profile: `profile`,
  account: `account`,
  product: `product`,
  invoice: `invoice`,
  details: `details`,
  checkout: `checkout`,
  calendar: `calendar`,
  analytics: `analytics`,
  ecommerce: `e-commerce`,
  management: `management`,
  menu_level_1: `menu level 1`,
  menu_level_2a: `menu level 2a`,
  menu_level_2b: `menu level 2b`,
  menu_level_3a: `menu level 3a`,
  menu_level_3b: `menu level 3b`,
  menu_level_4a: `menu level 4a`,
  menu_level_4b: `menu level 4b`,
  item_disabled: `item disabled`,
  item_label: `item label`,
  item_caption: `item caption`,
  item_external_link: `item external link`,
  description: `description`,
  other_cases: `other cases`,
  item_by_roles: `item by roles`,
  only_admin_can_see_this_item: `Only admin can see this item`,
  goBack: 'Go Back',
};

export default en;
