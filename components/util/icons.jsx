'use client'
import { useState } from 'react'

export default function Icons() {
  const icons_name = [
    'floaty-icon-acreage',
    'floaty-icon-air-conditioning',
    'floaty-icon-anchor1',
    'floaty-icon-aqualodge',
    'floaty-icon-audio-system',
    'floaty-icon-autopilot',
    'floaty-icon-award',
    'floaty-icon-bank-note',
    'floaty-icon-bareboat',
    'floaty-icon-bath',
    'floaty-icon-bbq',
    'floaty-icon-beds',
    'floaty-icon-best-price',
    'floaty-icon-boattype',
    'floaty-icon-booking-1',
    'floaty-icon-booking',
    'floaty-icon-breakfast',
    'floaty-icon-cabin-cruise',
    'floaty-icon-calendar-minus',
    'floaty-icon-calendar',
    'floaty-icon-calendar_3',
    'floaty-icon-captain',
    'floaty-icon-card-check-o',
    'floaty-icon-catamarans',
    'floaty-icon-check-1',
    'floaty-icon-check-2',
    'floaty-icon-clock-o',
    'floaty-icon-coffee-machine',
    'floaty-icon-comments1',
    'floaty-icon-conditioning',
    'floaty-icon-cooker',
    'floaty-icon-dedicated',
    'floaty-icon-destination',
    'floaty-icon-diamond',
    'floaty-icon-dine',
    'floaty-icon-discount',
    'floaty-icon-easy-crewed',
    'floaty-icon-envelope-o',
    'floaty-icon-envelope-open',
    'floaty-icon-fitness',
    'floaty-icon-fridge',
    'floaty-icon-fully-crewed',
    'floaty-icon-galleries',
    'floaty-icon-generator',
    'floaty-icon-guestes',
    'floaty-icon-hair-dryer',
    'floaty-icon-heating',
    'floaty-icon-helm',
    'floaty-icon-hotel',
    'floaty-icon-image-plus-1',
    'floaty-icon-inside-speakers',
    'floaty-icon-jetski',
    'floaty-icon-kid',
    'floaty-icon-kitchen-utensils',
    'floaty-icon-laundry',
    'floaty-icon-life-buoy',
    'floaty-icon-location-o',
    'floaty-icon-location1',
    'floaty-icon-location2',
    'floaty-icon-lock',
    'floaty-icon-login-o',
    'floaty-icon-mark',
    'floaty-icon-meeting_events',
    'floaty-icon-menu',
    'floaty-icon-minus',
    'floaty-icon-money',
    'floaty-icon-motoboad',
    'floaty-icon-motorboats',
    'floaty-icon-outsite-shower',
    'floaty-icon-paper_plane',
    'floaty-icon-parking',
    'floaty-icon-phone-3',
    'floaty-icon-phone1',
    'floaty-icon-plane',
    'floaty-icon-play',
    'floaty-icon-professionals',
    'floaty-icon-quality',
    'floaty-icon-question',
    'floaty-icon-quote-2',
    'floaty-icon-quote-3',
    'floaty-icon-radar',
    'floaty-icon-safe',
    'floaty-icon-sailboad',
    'floaty-icon-sailboats',
    'floaty-icon-sailing-boat',
    'floaty-icon-saving-safe',
    'floaty-icon-search',
    'floaty-icon-share-o',
    'floaty-icon-share',
    'floaty-icon-shopping-1',
    'floaty-icon-spa',
    'floaty-icon-star-2',
    'floaty-icon-star-bold',
    'floaty-icon-stars-1',
    'floaty-icon-swiming_pool',
    'floaty-icon-tag-left',
    'floaty-icon-telephone',
    'floaty-icon-ticket',
    'floaty-icon-towels',
    'floaty-icon-train',
    'floaty-icon-trusted',
    'floaty-icon-tv',
    'floaty-icon-user-o',
    'floaty-icon-users-01',
    'floaty-icon-users-o',
    'floaty-icon-users1',
    'floaty-icon-wifi_large',
    'floaty-icon-yachts',
    'floaty-icon-angle-down',
    'floaty-icon-angle-left',
    'floaty-icon-angle-right',
    'floaty-icon-angle-up',
    'floaty-icon-arrow-left',
    'floaty-icon-arrow-right',
    'floaty-icon-arrows-h',
    'floaty-icon-bars',
    'floaty-icon-calendar-alt',
    'floaty-icon-camera-alt',
    'floaty-icon-caret-down',
    'floaty-icon-caret-left',
    'floaty-icon-caret-right',
    'floaty-icon-caret-up',
    'floaty-icon-cart-empty',
    'floaty-icon-check-circle',
    'floaty-icon-check-square',
    'floaty-icon-check',
    'floaty-icon-chevron-circle-left',
    'floaty-icon-chevron-circle-right',
    'floaty-icon-chevron-down',
    'floaty-icon-chevron-left',
    'floaty-icon-chevron-right',
    'floaty-icon-chevron-up',
    'floaty-icon-circle',
    'floaty-icon-clock',
    'floaty-icon-cloud-download-alt',
    'floaty-icon-comment',
    'floaty-icon-comments-alt',
    'floaty-icon-comments',
    'floaty-icon-contact',
    'floaty-icon-credit-card',
    'floaty-icon-dot-circle',
    'floaty-icon-edit',
    'floaty-icon-envelope',
    'floaty-icon-expand-alt',
    'floaty-icon-external-link-alt',
    'floaty-icon-eye',
    'floaty-icon-fan',
    'floaty-icon-file-alt',
    'floaty-icon-file-archive',
    'floaty-icon-filter',
    'floaty-icon-folder-open',
    'floaty-icon-folder',
    'floaty-icon-free_ship',
    'floaty-icon-frown',
    'floaty-icon-gift',
    'floaty-icon-grip-horizontal',
    'floaty-icon-heart-fill',
    'floaty-icon-heart',
    'floaty-icon-history',
    'floaty-icon-home',
    'floaty-icon-info-circle',
    'floaty-icon-instagram',
    'floaty-icon-level-up-alt',
    'floaty-icon-location-circle',
    'floaty-icon-long-arrow-alt-down',
    'floaty-icon-long-arrow-alt-left',
    'floaty-icon-long-arrow-alt-right',
    'floaty-icon-long-arrow-alt-up',
    'floaty-icon-map-marker-check',
    'floaty-icon-meh',
    'floaty-icon-minus-circle',
    'floaty-icon-mobile-android-alt',
    'floaty-icon-money-bill',
    'floaty-icon-pencil-alt',
    'floaty-icon-play-2',
    'floaty-icon-plus-circle',
    'floaty-icon-plus',
    'floaty-icon-quote',
    'floaty-icon-random',
    'floaty-icon-reply-all',
    'floaty-icon-reply',
    'floaty-icon-search-plus',
    'floaty-icon-shield-check',
    'floaty-icon-shopping-basket',
    'floaty-icon-shopping-cart',
    'floaty-icon-sign-in-alt',
    'floaty-icon-sign-out-alt',
    'floaty-icon-smile',
    'floaty-icon-spinner',
    'floaty-icon-square',
    'floaty-icon-star',
    'floaty-icon-sync',
    'floaty-icon-tachometer-alt',
    'floaty-icon-tags',
    'floaty-icon-th-large',
    'floaty-icon-th-list',
    'floaty-icon-thumbtack',
    'floaty-icon-times-circle',
    'floaty-icon-times',
    'floaty-icon-trophy-alt',
    'floaty-icon-truck',
    'floaty-icon-unlock',
    'floaty-icon-user-headset',
    'floaty-icon-user-shield',
    'floaty-icon-user',
    'floaty-icon-users',
    'floaty-icon-video',
    'floaty-icon-adobe',
    'floaty-icon-amazon',
    'floaty-icon-android',
    'floaty-icon-angular',
    'floaty-icon-apper',
    'floaty-icon-apple',
    'floaty-icon-atlassian',
    'floaty-icon-behance',
    'floaty-icon-bitbucket',
    'floaty-icon-bitcoin',
    'floaty-icon-bity',
    'floaty-icon-bluetooth',
    'floaty-icon-btc',
    'floaty-icon-centos',
    'floaty-icon-chrome',
    'floaty-icon-codepen',
    'floaty-icon-cpanel',
    'floaty-icon-discord',
    'floaty-icon-dochub',
    'floaty-icon-docker',
    'floaty-icon-dribbble',
    'floaty-icon-dropbox',
    'floaty-icon-drupal',
    'floaty-icon-ebay',
    'floaty-icon-facebook-f',
    'floaty-icon-facebook',
    'floaty-icon-figma',
    'floaty-icon-firefox',
    'floaty-icon-google-plus',
    'floaty-icon-google',
    'floaty-icon-grunt',
    'floaty-icon-gulp',
    'floaty-icon-html5',
    'floaty-icon-jenkins',
    'floaty-icon-joomla',
    'floaty-icon-link-brand',
    'floaty-icon-linkedin',
    'floaty-icon-mailchimp',
    'floaty-icon-opencart',
    'floaty-icon-paypal',
    'floaty-icon-pinterest-p',
    'floaty-icon-reddit',
    'floaty-icon-skype',
    'floaty-icon-slack',
    'floaty-icon-snapchat',
    'floaty-icon-spotify',
    'floaty-icon-trello',
    'floaty-icon-twitter',
    'floaty-icon-vimeo',
    'floaty-icon-whatsapp',
    'floaty-icon-wordpress',
    'floaty-icon-yoast',
    'floaty-icon-youtube'
  ]

  const icons_content = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',

    '',
    '',
    '',
    ''
  ]

  // Unificar los dos arreglos en uno solo
  const icons = icons_name.map((name, index) => ({
    name: name,
    content: icons_content[index]
  }))

  // Estado para almacenar la opción seleccionada
  const [selectedOption, setSelectedOption] = useState('')

  // Función para manejar el cambio de opción seleccionada
  const handleSelectChange = event => {
    setSelectedOption(event.target.value)
  }

  return (
    <select
      name=''
      id=''
      onChange={handleSelectChange} // Manejar el cambio de opción seleccionada
      value={selectedOption} // Establecer el valor seleccionado en el estado
      className='w-full min-w-[210px] rounded-lg border-2 bg-white p-3 font-floaty text-xl text-sky-600'
    >
      {icons.map((icon, index) => (
        <option key={index} value={icon.name}>
          {icon.content}
        </option>
      ))}
    </select>
  )
}
