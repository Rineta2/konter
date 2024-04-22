import { CgSmartphoneChip } from "react-icons/cg";
import { IoLogoGooglePlaystore, IoLogoAndroid } from "react-icons/io5";
import { IoIosMailOpen } from "react-icons/io"
import { FaApple } from "react-icons/fa";
import { BsLaptopFill } from "react-icons/bs";
import { SiGmail, SiGooglemaps } from "react-icons/si";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

import about from '@/components/assets/About/about.png'

export const menu = [
  {
    id: 1,
    title: 'Home',
    path: '#home',
    active: 'home'
  },

  {
    id: 2,
    title: 'Say Hello',
    path: '#say',
    active: 'say'
  },

  {
    id: 3,
    title: 'Feature',
    path: '#feature',
    active: 'feature'
  },

  {
    id: 4,
    title: 'Review',
    path: '#review',
    active: 'review'
  },

  {
    id: 5,
    title: 'About',
    path: '#about',
    active: 'about'
  },

  {
    id: 5,
    title: 'Kontak',
    path: '#kontak',
    active: 'kontak'
  },
]

export const headingHome = [
  {
    title: 'Layanan Ponsel Profesional',
    text: 'Solusi Cepat dan Handal untuk Perbaikan dan Perawatan Ponsel Anda',
    icons: <CgSmartphoneChip />
  }
]

export const dataHome = [
  {
    title: 'Dengan Layanan Ponsel kami',
    text: 'Kami dapat memperbaiki ponsel anda dengan cepat dan tanpa repot.',
    icons: <IoLogoGooglePlaystore />,
    name: 'Download Apps',
    path: '#'
  },
]

export const dataSay = [
  {
    title: 'Selamat Datang Di Layanan Kami',
    text: 'Berkah Cellular',
    desc: 'Berkah Cellular adalah tujuan terpercaya bagi Anda yang membutuhkan perbaikan cepat dan handal untuk ponsel Anda. Dengan tim ahli teknisi yang berpengalaman, kami siap mengatasi segala macam masalah ponsel, mulai dari layar retak hingga masalah baterai dan perangkat lunak. Kami mengutamakan kepuasan pelanggan dan menyediakan layanan yang cepat, efisien, dan terjangkau. Percayakan ponsel Anda kepada MobileFix dan kembali nikmati pengalaman menggunakan ponsel Anda dengan lancar. Hubungi kami hari ini untuk mendapatkan bantuan terbaik untuk ponsel Anda!'
  },
]

export const headingFeatures = [
  {
    title: 'Berkah Cellular',
    text: 'Layanan Perbaikan Ponsel yang Cepat dan Handal'
  }
]

export const dataFeatures = [
  {
    id: 1,
    icon: IoLogoAndroid,
    text: 'Perbaikan cepat untuk ponsel Android Anda. Layar retak, perangkat lunak, dan pemulihan data - semuanya ada di sini.'
  },

  {
    id: 2,
    icon: FaApple,
    text: 'Perbaikan iPhone dengan keahlian. Layar retak, baterai lemah, atau masalah perangkat lunak - kami punya solusinya.'
  },

  {
    id: 3,
    icon: BsLaptopFill,
    text: 'Perbaikan laptop yang andal. Baik itu masalah hardware atau software, tim kami siap membantu memperbaiki laptop Anda.'
  }
]

export const headingReviews = [
  {
    title: 'Riview Gadget Terbaru Analisis Mendalam'
  }
]

export const dataReviews = [
  {
    id: 1,
    icons: IoIosMailOpen,
    text: 'Berkah Cellular sangat cepat dan profesional dalam memperbaiki ponsel saya yang rusak. Layanan yang ramah dan hasilnya memuaskan. Terima kasih!',
    name: 'John Doe',
  },

  {
    id: 2,
    icons: IoIosMailOpen,
    text: 'Tidak bisa puas lagi dengan layanan Berkah Cellular! Mereka sangat ahli dalam memperbaiki iPhone saya yang bermasalah dengan layar retak.',
    name: 'Rick Doe',
  },

  {
    id: 3,
    icons: IoIosMailOpen,
    text: 'Laptop saya hidup lagi berkat Berkah Cellular! Layanan cepat dan harga yang terjangkau. Luar biasa.',
    name: 'Jane Doe',
  }
]

export const headingAbout = [
  {
    title: 'Tentang Berkah Cellular',
    text: 'Kami Menyediakan Solusi Profesional untuk Perbaikan Ponsel dan Laptop Anda',
    desc: 'Berkah Cellular adalah destinasi terpercaya untuk perbaikan ponsel dan laptop. Dengan tim ahli kami, kami menangani segala masalah dengan cepat dan profesional. Kepuasan pelanggan adalah prioritas kami. Temukan mengapa kami adalah pilihan utama untuk perbaikan perangkat Anda.',
  }
]

export const dataAbout = [
  {
    img: about
  }
]

export const headingContact = [
  {
    title: 'Kontak'
  }
]

export const dataContact = [
  {
    icons: <SiGmail />,
    title: 'Email',
    text: 'Hubungi Kami',
    path: 'mailto:rinetastore@gmail.com'
  },
]

export const dataContact2 = [
  {
    icons: <SiGooglemaps />,
    title: 'Lokasi',
    text: 'Jl. Babakan, Leuwiliang, Kec. Leuwiliang, Kabupaten Bogor, Jawa Barat 16640',
    path: 'https://maps.app.goo.gl/fyrYN8rKuiEYJMcL7'
  },
]

export const social = [
  {
    id: 1,
    icons: <FaFacebookF />,
    path: 'https://www.facebook.com/profile.php?id=61552827874333',

  },

  {
    id: 2,
    icons: <FaInstagram />,
    path: 'https://www.instagram.com/rzkir.20/',

  },

  {
    id: 3,
    icons: <FaWhatsapp />,
    path: 'https://wa.me/6285219807430',
  }
]