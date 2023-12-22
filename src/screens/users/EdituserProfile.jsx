import React from "react";

const EdituserProfile = () => {
  return (
    <div className="px-5 font-sanchez sm:px-14 lg:px-24 h-[calc(100dvh-64px-48px)]">
      <div className="pt-5 text-3xl">User profile</div>
      <div className="h-[calc(100vh-64px-48px-70px)] overflow-x-auto">
        <div className="text-lg mt-4 block w-full md:w-auto">
          <div className="p-2 bg-[#55D6C2] w-1/2 md:w-auto">Edit Account</div>
        </div>
        <div className="w-full flex border-t-4 border-[#C4C4C4]">
          <div className="w-1/2 bg-[#8F8C8C] p-2 text-white">Username</div>
          <input type="text" className="w-1/2 border-none" />
        </div>
        <div className="w-full flex  border-t-4 border-[#C4C4C4]">
          <div className="w-1/2 bg-[#8F8C8C] p-2 text-white">Current Password</div>
          <input type="text" className="w-1/2  border-none" />
        </div>
        <div className="w-full flex  border-t-4 border-[#C4C4C4]">
          <div className="w-1/2 bg-[#8F8C8C] p-2 text-white">New Password</div>
          <input type="text" className="w-1/2  border-none" />
        </div>
        <div className="w-full flex border-t-4 border-[#C4C4C4]">
          <div className="w-1/2 bg-[#8F8C8C] p-2 text-white">Confirm Password</div>
          <input type="text" className="w-1/2  border-none" />
        </div>
        <div className="w-full flex border-t-4 border-[#C4C4C4]">
          <div className="w-1/2 bg-[#8F8C8C] p-2 text-white">Email</div>
          <input type="text" className="w-1/2  border-none" />
        </div>
        <div className="w-full flex border-t-4 border-[#C4C4C4]">
          <div className="w-1/2 bg-[#8F8C8C] p-2 text-white">Real Name</div>
          <input type="text" className="w-1/2  border-none" />
        </div>
        <div className="w-full flex border-t-4 border-[#C4C4C4]">
          <div className="w-1/2 bg-[#8F8C8C] p-2 text-white">Access Level</div>
          <input type="text" className="w-1/2  border-none" />
        </div>
        <div className="w-full flex border-t-4 border-[#C4C4C4]">
          <div className="w-1/2 bg-[#8F8C8C] p-2 text-white">Project Access Level</div>
          <input type="text" className="w-1/2  border-none" />
        </div>
        <div className="flex w-full gap-[1px]">
            <div className="w-1/2 p-2 bg-[#C4C4C4]">
                <button className="p-2 rounded-md bg-[#55D6C2]">
                    Update User
                </button>
            </div>
            <div className="w-1/2 bg-[#C4C4C4] text-transparent">.</div>
        </div>
      </div>
    </div>
  );
};

export default EdituserProfile;
