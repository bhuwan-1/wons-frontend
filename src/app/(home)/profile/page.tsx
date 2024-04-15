import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Profile = () => {
  return (
    <div className="p-4 overflow-auto">
      <div className="w-full h-screen">
        <div>
            <Card className="rounded-none h-[40vh] p-2 w-full flex items-center md:flex md:flex-row">
            <div className="avatar bg-green-400 flex items-center justify-center">
                <div className="w-1/2 h-1/2 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
                <div className="h-full w-full">
                    <CardHeader>
                        <CardTitle>Bhuwan Sharma Koirala</CardTitle>
                        <CardDescription>ayeitsbhuws@gmail.com</CardDescription>
                    </CardHeader>
                </div>
            </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
