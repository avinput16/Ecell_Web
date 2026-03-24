import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import './LaunchpadLinks.css';
import lplogo from '../../assets/ecell/lp_logo_new.png';

// ───────────────────────────────────────────────
// Edit the links below to update the page
// ───────────────────────────────────────────────
const PROFILE = {
  avatar: lplogo,
  handle: 'ecell_bphc',
  bio: 'E-Cell, BITS Pilani Hyderabad Campus',
};

const SOCIAL_LINKS = [
  { icon: <FaInstagram />, href: 'https://www.instagram.com/ecell_bphc', label: 'Instagram' },
  { icon: <FaLinkedin />, href: 'https://www.linkedin.com/company/e-cell-bphc/', label: 'LinkedIn' },
  { icon: <FaTwitter />, href: 'https://x.com/ecell_bphc', label: 'X / Twitter' },
  { icon: <FaFacebook />, href: 'https://www.facebook.com/groups/158307448076754/', label: 'Facebook' },
];

const LINKS = [
  {
    emoji: '🌱',
    title: 'SEED 2026',
    subtitle: 'Summit for E-Cell Development',
    href: '/launchpad/seed',
    internal: true,
  },
  {
    emoji: '🏆',
    title: 'Launchpad National Hackathon',
    subtitle: 'Prize Pool of ₹3 Lakhs',
    href: 'https://knowvationlearnings.in/checkout?eventId=261a4cfb-75cc-42fe-a72c-ff7c34b1f5d5&fId=4d0a8f7f-4da0-4685-8316-ca767ad0cec8',
    internal: false,
  },
  {
    emoji: '⏳',
    title: 'Early Bird Tickets Closing Soon',
    subtitle: 'Limited spots — grab yours now',
    href: '/launchpad/passes',
    internal: true,
  },
  {
    emoji: '🎓',
    title: "Coming as a College Group? Grab Contingent Passes for Launchpad '26",
    subtitle: 'Special group pricing available',
    href: '/launchpad/contingent-passes',
    internal: true,
  },
  {
    emoji: '🌐',
    title: 'Become a Campus Ambassador for Launchpad 2026',
    subtitle: 'Represent your college at Launchpad',
    href: '/launchpad/campus-ambassador',
    internal: true,
  },
  {
    emoji: '🏨',
    title: "Accommodation & Stay for Launchpad '26",
    subtitle: 'Book your stay on campus',
    href: '/launchpad/accommodation',
    internal: true,
  },
  {
    emoji: '🎤',
    title: "Speakers at Launchpad '26",
    subtitle: 'Industry leaders & venture capitalists',
    href: '/launchpad/speakers',
    internal: true,
  },
  {
    emoji: '🏢',
    title: 'Want to Sponsor Launchpad 2026?',
    subtitle: 'Partner with BITS Hyderabad\'s premier startup fest',
    href: '/launchpad/sponsor/wanna-sponsor',
    internal: true,
  },
  {
    emoji: '📸',
    title: 'Gallery — Relive Launchpad 2025',
    subtitle: 'Photos & highlights from last year',
    href: '/launchpad/gallery',
    internal: true,
  },
  {
    emoji: '🚀',
    title: 'Visit the Official Launchpad Website',
    subtitle: 'ecellbphc.in/launchpad',
    href: '/launchpad',
    internal: true,
  },
  {
    emoji: '📢',
    title: "Launchpad '26 Announcements",
    subtitle: 'WhatsApp Community • Free to join',
    href: 'https://chat.whatsapp.com/GRGDBbVBNiV6WvTpw1g182',
    internal: false,
    thumbnailBg: '#25d366',
    thumbnailIcon: '💬',
  },
];

// ───────────────────────────────────────────────

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: [0.22, 0.61, 0.36, 1] } },
};

const profileVariants = {
  hidden: { opacity: 0, scale: 0.88, y: -12 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 0.61, 0.36, 1] } },
};

function LinkCard({ link }) {
  const Tag = link.internal ? 'a' : 'a';
  const extraProps = link.internal
    ? {}
    : { target: '_blank', rel: 'noopener noreferrer' };

  return (
    <motion.div variants={itemVariants}>
      <Tag className="lp-link-card" href={link.href} {...extraProps} aria-label={link.title}>
        {link.thumbnailIcon ? (
          <div
            className="lp-link-emoji"
            style={{ background: link.thumbnailBg || 'rgba(255,255,255,0.06)' }}
          >
            {link.thumbnailIcon}
          </div>
        ) : (
          <div className="lp-link-emoji">{link.emoji}</div>
        )}

        <div className="lp-link-text">
          <span className="lp-link-title">{link.title}</span>
          {link.subtitle && (
            <span className="lp-link-subtitle">{link.subtitle}</span>
          )}
        </div>

        <span className="lp-link-arrow">
          <FiExternalLink />
        </span>
      </Tag>
    </motion.div>
  );
}

export default function LaunchpadLinks() {
  return (
    <div className="lp-links-root">
      {/* Profile */}
      <motion.div
        className="lp-links-profile"
        variants={profileVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="lp-links-avatar-wrap">
          <img
            src={PROFILE.avatar}
            alt={PROFILE.handle}
            className="lp-links-avatar"
          />
        </div>

        <h1 className="lp-links-handle">{PROFILE.handle}</h1>
        <p className="lp-links-bio">{PROFILE.bio}</p>

        <div className="lp-links-socials">
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="lp-links-social-icon"
              aria-label={s.label}
              title={s.label}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </motion.div>

      {/* Links */}
      <motion.div
        className="lp-links-list"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {LINKS.map((link, i) => (
          <LinkCard key={i} link={link} />
        ))}
      </motion.div>

      {/* Footer */}
      <div className="lp-links-footer">
        <span className="lp-links-footer-text">© 2026 E-Cell BITS Hyderabad</span>
      </div>
    </div>
  );
}
