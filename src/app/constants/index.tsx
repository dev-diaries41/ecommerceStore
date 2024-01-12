export const inclusions = [
  {
    title: 'Free Shipping',
    description: 'Free shipping for order above £150',
    icon: '/assets/icons/shipping.svg',
  },
  {
    title: 'Returns',
    description: 'Return Within 7 days for an exchange',
    icon: '/assets/icons/orders.svg',
  },
  {
    title: 'Flexible Payment',
    description: 'All major Credit Card brands accepted',
    icon: '/assets/icons/payment.svg',
  },
  {
    title: 'Online Support',
    description: '24 hours a day, 7 days a week',
    icon: '/assets/icons/support.svg',
  },
]

export const extraInformation = [
  {
    title: 'Customer Service',
    infoTypes: [
      {title: 'Shipping Policy', url: '/shipping'},
      {title: 'Refund Policy', url: '/refund-policy'},
      {title: 'Terms Of Service', url: '/terms-of-services'},
      {title: 'Privacy Policy', url: '/privacy-policy'},
  ]},

  {
    title: 'Account',
    infoTypes: [
      {title: 'My Account', url: '/account'},
      {title: 'My Orders', url: '/orders'},
  ]},
]

export const profileNavItems = [
  {
    title: 'Personal Information',
    url: '/account',
    icon: '/assets/icons/user.svg',
  },
  {
    title: 'My Purchases',
    url: '/account/purchases',
    icon: '/assets/icons/purchases.svg',
  },
  {
    title: 'My Orders',
    url: '/account/orders',
    icon: '/assets/icons/orders.svg',
  },
  {
    title: 'Logout',
    url: '/logout',
    icon: '/assets/icons/logout.svg',
  },
]

export const noHeaderFooterUrls = ['/create-account', '/login', '/recover-password']
