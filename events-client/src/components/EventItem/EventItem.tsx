import UserItem from '../UserItem/UserItem';
import useGetAllUsers from '../../basics/graphql/queries/getAllUsers'

type Event = {
  title: string;
  description: string;
  date: string;
  location: string;
  organizer?: string;
  styleType?: 'default' | 'highlighted' | 'card';
};

const EventItem = ({ title, description, date, location, organizer, styleType = 'default' }: Event) => {
  let currentUser;
  if (organizer) {
    const { data: users } = useGetAllUsers();
    currentUser = users.find((user) => user._id === organizer);
  }

  const formattedDate = new Intl.DateTimeFormat("uk-UA", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(new Date(date));

  let containerClasses = "bg-white shadow-lg rounded-2xl p-6 border border-gray-200 transition-transform transform w-100 max-w-3xl";
  let titleClasses = "text-2xl font-semibold text-gray-900";
  let descriptionClasses = "text-gray-600 mt-2";
  let infoClasses = "mt-4 text-sm text-gray-500 space-y-2";

  if (styleType === 'highlighted') {
    containerClasses += " bg-yellow-100 border-yellow-400";
    titleClasses += " text-yellow-600";
  } else if (styleType === 'card') {
    containerClasses += " p-6 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 text-white shadow-lg rounded-xl transform hover:scale-105 transition-transform duration-300";
    titleClasses += " text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500";
    descriptionClasses += " text-lg font-light mt-4 tracking-wide";
    infoClasses += " text-gray-200 font-medium";
  }

  return (
    <div className={containerClasses}>
      <h2 className={titleClasses}>{title}</h2>
      <p className={descriptionClasses}>{description}</p>
      <div className={infoClasses}>
        <p>📅 <span className="font-medium text-gray-700">{formattedDate}</span></p>
        <p>📍 <span className="font-medium text-gray-700">{location}</span></p>
      </div>
      {currentUser && <div className="mt-6 p-4 border-t border-gray-300">
          <h3 className="text-lg font-semibold text-gray-800">Organizer</h3>
          <UserItem name={currentUser?.name} email={currentUser?.email} />
      </div>
      }

    </div>
  );
};

export default EventItem;
