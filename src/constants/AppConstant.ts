export const generateDummyRideRequests = () => {
  return [
    {
      id: '1',
      driverId: null,
      pickupLocation: {latitude: 37.782, longitude: -122.421},
      destination: {latitude: 37.78825, longitude: -122.4234},
      status: 'pending',
      pickupTime: new Date(),
      timestamp: new Date(),
      Rider: {
        id: 'RD987456',
        name: 'Alice',
        email: 'alice@gmail.com',
        phone: '9658741254',
      },
    },
    {
      id: '2',
      driverId: null,
      pickupLocation: {latitude: 37.79255, longitude: -122.425},
      destination: {latitude: 37.78825, longitude: -122.4234},
      status: 'pending',
      pickupTime: new Date(),
      timestamp: new Date(),
      Rider: {
        id: 'RD987256',
        name: 'Charlic',
        email: 'charlic@gmail.com',
        phone: '9874102587',
      },
    },
    {
      id: '3',
      driverId: null,
      pickupLocation: {latitude: 37.8, longitude: -122.4124},
      destination: {latitude: 37.78825, longitude: -122.4234},
      status: 'pending',
      pickupTime: new Date(),
      timestamp: new Date(),
      Rider: {
        id: 'RD997456',
        name: 'John',
        email: 'john@gmail.com',
        phone: '9512365478',
      },
    },
    {
      id: '4',
      driverId: null,
      pickupLocation: {latitude: 37.8001, longitude: -122.4224},
      destination: {latitude: 37.78825, longitude: -122.4234},
      status: 'pending',
      pickupTime: new Date(),
      timestamp: new Date(),
      Rider: {
        id: 'RD983456',
        name: 'Jack',
        email: 'jack@gmail.com',
        phone: '6547891452',
      },
    },
  ];
};

export const statusData = [
  {
    label: 'Accept',
    status: 'Accepted',
  },
  {
    label: 'Decline',
    status: 'Declined',
  },
  {
    label: 'Picked Up',
    status: 'Picked Up',
  },
  {
    label: 'Dropped Off',
    status: 'Dropped Off',
  },
];
