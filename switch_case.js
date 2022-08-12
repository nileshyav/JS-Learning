const getUserRole = (name, role) => {
  name = name.toLowerCase();
  switch (role.toLowerCase()) {
    case 'admin':
      console.log(`Hey! ${name} you have full admin access`);

      break;

    default:
      break;
  }
};

getUserRole('Nilesh', 'ADMIN');
