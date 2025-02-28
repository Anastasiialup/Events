type UserItemProps = {
  name: string;
  email: string;
  styleType?: 'default' | 'highlighted' | 'card';
};

const UserItem = ({ name, email, styleType = 'default' }: UserItemProps) => {

  let containerClasses = "flex items-center gap-4 p-4 bg-gray-100 rounded-lg shadow-md max-w-xl";
  let nameClasses = "text-lg font-medium text-gray-900";
  let emailClasses = "text-sm text-gray-600";

  if (styleType === 'highlighted') {
    containerClasses += " bg-green-100 border-green-400";
    nameClasses += " text-green-600";
  } else if (styleType === 'card') {
    containerClasses += " p-6 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 text-white shadow-lg rounded-xl transform hover:scale-105 transition-transform duration-300";
    nameClasses += " text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-yellow-500";
    emailClasses += " text-lg font-light mt-2 tracking-wide";
  }

  return (
    <div className={containerClasses}>
      <div className="flex flex-col">
        <span className={nameClasses}>{name}</span>
        <span className={emailClasses}>{email}</span>
      </div>
    </div>
  );
};

export default UserItem;
