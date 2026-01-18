const SocialButton = ({ href, icon: Icon, label, variant = "primary" }) => {
  // Estilos base
  const baseStyles = "p-5 rounded-2xl transition-all hover:scale-110 border border-transparent dark:border-[#333] flex items-center justify-center";
  
  // Variantes de color
  const variants = {
    primary: "bg-gray-900 text-white hover:bg-gray-700 dark:bg-[#1f1f1f] dark:text-gray-300 dark:hover:bg-white dark:hover:text-black",
    linkedin: "bg-[#0077b5] text-white hover:bg-[#005582] dark:bg-[#1f1f1f] dark:text-gray-300 dark:hover:bg-[#0077b5] dark:hover:text-white"
  };

  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label={label}
      className={`${baseStyles} ${variants[variant] || variants.primary}`}
    >
      <Icon size={26} />
    </a>
  );
};

export default SocialButton;
