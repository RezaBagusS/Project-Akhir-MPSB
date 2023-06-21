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

export const FailedModal = ({ open, setOpen }) => {

    return (
        <Fragment>
          <Dialog open={open} >
            <DialogHeader>
              <Typography variant="h5" color="blue-gray">
                Sorry !!
              </Typography>
            </DialogHeader>
            <DialogBody divider className="grid place-items-center gap-4">
              <CheckBadgeIcon className="h-16 w-16 text-red-500" />
              <Typography color="red" variant="h4" className="text-center">
                Maaf!! kamu belum berhasil menyelesaikan challenge ini.
              </Typography>
              <Typography className="text-center font-normal">
                Jangan khawatir, kamu bisa mengerjakan challenge ini kembali untuk memperbaiki kesalahannya.
              </Typography>
            </DialogBody>
            <DialogFooter className="space-x-2">
              <Button variant="text" color="blue-gray" onClick={
                () => {
                    setOpen(!open);
                }
              }>
                Kembali
              </Button>
            </DialogFooter>
          </Dialog>
        </Fragment>
    )
}