import { CONSTANTS } from "@/utilities/constants";

const UserInfo: React.FC = () => (
    <div className="flex flex-col items-center gap-4 mb-6">
      <div className="flex items-center flex-col">
        <img src={CONSTANTS.DUMMY_BG_IMAGE} alt="bg" className="rounded-md" />
        <div className="shadow-lg p-1 -mt-12 z-10 bg-white">
          <img
            src={CONSTANTS.DUMMY_USER_IMAGE}
            alt="user"
            className="rounded-md w-12 h-12"
          />
        </div>
      </div>
      <div>
        <h3 className="font-bold lato-bold text-sm">
          {CONSTANTS.DUMMY_USER_NAME}
        </h3>
        <p className="text-xs text-gray-400">@abebebeso</p>
      </div>
    </div>
  );

  export default UserInfo;