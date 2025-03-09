import React from "react";

function Footer() {
  return (
    <div>
      <hr />
      <footer className="footer footer-horizontal footer-center text-base-content rounded p-10 dark:bg-slate-900 dark:text-white">
        <nav className="grid grid-flow-col gap-4">
          <a href="/courses" className="link link-hover">Courses</a>
          <a href="/about" className="link link-hover">About</a>
          <a href="/contact" className="link link-hover">Contact Us</a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            {/* GitHub */}
            <a href="https://github.com/VishalRaj20" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.172c-3.338.724-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.76-1.604-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.003.404 2.292-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.84 1.234 1.911 1.234 3.221 0 4.61-2.805 5.624-5.475 5.92.43.37.814 1.102.814 2.222v3.293c0 .322.216.693.825.576 4.765-1.585 8.203-6.083 8.203-11.385 0-6.627-5.373-12-12-12z"></path>
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/vishal-raj-816485253/" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M22.23 0h-20.46c-.97 0-1.77.8-1.77 1.77v20.46c0 .97.8 1.77 1.77 1.77h20.46c.97 0 1.77-.8 1.77-1.77v-20.46c0-.97-.8-1.77-1.77-1.77zm-15.38 20.44h-3.22v-11.46h3.22v11.46zm-1.61-13.07c-1.03 0-1.86-.83-1.86-1.86s.83-1.86 1.86-1.86 1.86.83 1.86 1.86-.83 1.86-1.86 1.86zm15.39 13.07h-3.22v-5.6c0-1.34-.48-2.25-1.69-2.25-.92 0-1.47.62-1.71 1.22-.09.22-.11.52-.11.83v5.8h-3.22s.04-9.4 0-10.36h3.22v1.47c.43-.66 1.21-1.6 2.95-1.6 2.16 0 3.79 1.42 3.79 4.48v6.01z"></path>
              </svg>
            </a>
            {/* Telegram */}
            <a href="https://t.me/vishal_raj20" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M21.751 3.503c.258.199.29.512.079.722l-2.887 17.69c-.092.544-.402.682-.888.424l-4.956-3.667-2.396 2.307c-.238.238-.467.362-.686.37-.22.008-.377-.041-.47-.146-.094-.104-.133-.225-.117-.362l.796-5.049 9.422-8.353-11.38 7.167-4.676-1.61c-.356-.126-.537-.34-.546-.644-.009-.305.144-.533.458-.683l17.57-7.169c.23-.097.438-.073.623.071z"></path>
              </svg>
            </a>
            {/* WhatsApp */}
            <a href="https://wa.me/9142528179" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                <path d="M12.011 0c-6.632 0-12.011 5.379-12.011 12.011 0 2.117.553 4.107 1.523 5.829l-1.511 5.524 5.643-1.485c1.652.903 3.55 1.425 5.566 1.425 6.632 0 12.011-5.379 12.011-12.011s-5.379-12.011-12.011-12.011zm0 21.738c-1.767 0-3.449-.486-4.882-1.357l-.351-.207-3.35.884.888-3.307-.22-.358c-.89-1.451-1.36-3.122-1.36-4.899 0-5.151 4.182-9.333 9.333-9.333s9.333 4.182 9.333 9.333c0 5.151-4.182 9.333-9.333 9.333z"></path>
              </svg>
            </a>
          </div>
        </nav>
        <aside>
          <p>Copyright © {new Date().getFullYear()}   Designed and Developed by Vishal Raj</p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
