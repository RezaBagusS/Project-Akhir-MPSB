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
import { useNavigate } from "react-router-dom";

export const SuccessModal = ({ open, setOpen, responseSuccess }) => {
    const navigate = useNavigate();

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
              <Typography color="red" variant="h4">
                Selamat kamu berhasil menyelesaikan challenge ini.
              </Typography>
              <Typography className="text-center font-normal">
                Kamu mengerjakan challenge ini dengan baik, selanjutnya kamu bisa melihat kembali dan mengerjakan challenge lainnya.
              </Typography>
            </DialogBody>
            <DialogFooter className="space-x-2">
              <Button variant="text" color="blue-gray" onClick={
                () => {
                    setOpen(!open)
                    navigate("/dashboard/challenges");
                }
              }>
                Kembali
              </Button>
            </DialogFooter>
          </Dialog>
        </Fragment>
    )
}