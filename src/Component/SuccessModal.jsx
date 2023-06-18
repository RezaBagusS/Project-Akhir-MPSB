import { Fragment } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { useNavigate, useParams } from "react-router-dom";
import { sendSubmitChallenge } from "../Helpers/AuthHelpers";

export const SuccessModal = ({ open, setOpen }) => {
  const navigate = useNavigate();
  const { challengeId } = useParams();

  const addData = async () => {
    try {
        if (!localStorage.getItem("oldDataChallenge")) {
            const response = await sendSubmitChallenge(localStorage.getItem("token"), challengeId);
            localStorage.removeItem("html");
            localStorage.removeItem("css");
            localStorage.removeItem("js");
        }
      setOpen(!open);
      navigate("/dashboard/challenges");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Fragment>
      <Dialog open={open}>
        <DialogHeader>
          <Typography variant="h5" color="blue-gray">
            Congratulation !!
          </Typography>
        </DialogHeader>
        <DialogBody divider className="grid place-items-center gap-4">
          <CheckBadgeIcon className="h-16 w-16 text-red-500" />
          <Typography color="red" variant="h4" className="text-center">
            Selamat kamu berhasil menyelesaikan challenge ini.
          </Typography>
          <Typography className="text-center font-normal">
            Kamu mengerjakan challenge ini dengan baik, selanjutnya kamu bisa
            melihat kembali dan mengerjakan challenge lainnya.
          </Typography>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button
            variant="text"
            color="blue-gray"
            onClick={addData}
          >
            Kembali
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
};
