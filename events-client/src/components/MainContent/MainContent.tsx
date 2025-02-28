import EventItem from '../EventItem/EventItem';
import useGetAllEvents from '../../basics/graphql/queries/getAllEvents';

const MainContent = () => {
  const { data: events } = useGetAllEvents();

  return (
    <div>
      <div className='flex flex-wrap justify-center gap-5 mt-5'>
        {events?.map((event) => {
          return <EventItem
            title={event.title}
            description={event.description}
            date={event.date}
            location={event.location}
            organizer={event.organizer._id}
          />;
        })}
      </div>
    </div>
  );
};

export default MainContent;
