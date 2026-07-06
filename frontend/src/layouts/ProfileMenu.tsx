type ProfileMenuProps = {
  isOpen: boolean;
};

const ProfileMenu = ({ isOpen }: ProfileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="absolute right-0 top-14 w-64 rounded-xl border bg-white shadow-2xl">

      <div className="border-b p-4">
        <h2 className="text-lg font-bold text-gray-800">
          My Profile
        </h2>
      </div>

      <div className="space-y-3 p-4 text-gray-700">

        <button className="w-full rounded-lg bg-blue-600 py-2 text-white transition hover:bg-blue-700">
          Login
        </button>

        <div>
          <span className="font-semibold">Name :</span>
          <span className="ml-2">Satyakam</span>
        </div>

        <div>
          <span className="font-semibold">Age :</span>
          <span className="ml-2">XX</span>
        </div>

        <div>
          <span className="font-semibold">Phone :</span>
          <span className="ml-2">XXXXXXXXXX</span>
        </div>

      </div>

    </div>
  );
};

export default ProfileMenu;