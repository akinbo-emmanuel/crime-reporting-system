"use client";

import SubmitReport, { Evidence } from "@/api/upload";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { generalStore } from "@/store/store";
import { useState } from "react";

export default function Home() {
  const { submitReportWithEvidence, submitReportWithoutEvidence } = SubmitReport();
  const loading = generalStore((state: any) => state.loading);
  // const [loading, setLoading] = useState(false);

  const [file, setFile] = useState<File | null>(null);

  const [fullName, setFullName] = useState<string>("");
  const [tel, setTel] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [dateTime, setDateTime] = useState("");
  const [location, setLocation] = useState("");
  const [crimeType, setCrimeType] = useState<string>("");
  const [otherCrimeType, setOtherCrimeType] = useState("");
  const [isOtherSelected, setIsOtherSelected] = useState<boolean>(false);
  const [description, setDescription] = useState("");
  const [suspectInfo, setSuspectInfo] = useState("");
  const [witnessInfo, setWitnessInfo] = useState("");
  const [evidence, setEvidence] = useState<Evidence | null>({
    url: "",
    name: "",
    createdAt: new Date(),
  });
  const status = "submitted";

  const formData = {
    fullName,
    tel,
    email,
    dateTime,
    location,
    crimeType,
    otherCrimeType,
    description,
    suspectInfo,
    witnessInfo,
    evidence,
    status,
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (file) {
      await submitReportWithEvidence(file, setEvidence, formData);
    } else {
      await submitReportWithoutEvidence(formData);
    }
  };

  return (
    <div className="pt-36 pb-20 min-h-screen px-1.5 md:px-10 lg:px-20 xl:px-40 flex justify-center items-center">
      {/* <div className="bg-black/[50%] absolute top-0 w-full h-full"></div> */}

      <div className="bg-white p-5 md:py-10 xl:py-20 md:px-10 shadow-2xl rounded-lg flex items-center justify-center text-sm">
        <form
          onSubmit={handleSubmit}
          id="crime-report-form"
          className="grid md:grid-cols-2 xl:grid-cols-3 w-full gap-5"
        >
          {/* Full Name */}
          <div className="flex flex-col gap-2">
            <label htmlFor="full-name">
              Full Name <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
              }}
              className="border py-2.5 px-5 rounded-md outline-none"
              placeholder="John Doe"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col gap-2">
            <label htmlFor="full-name">
              Phone Number <span className="text-red-600">*</span>
            </label>
            <input
              type="tel"
              id="contact-phone"
              name="contact-phone"
              value={tel}
              onChange={(e) => {
                setTel(e.target.value);
              }}
              className="border py-2.5 px-5 rounded-md outline-none"
              placeholder="+234**********"
              required
            />
          </div>

          {/* Email Address */}
          <div className="flex flex-col gap-2">
            <label htmlFor="full-name">
              Email Address <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              id="contact-email"
              name="contact-email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="border py-2.5 px-5 rounded-md outline-none"
              placeholder="****@gmail.com"
              required
            />
          </div>

          {/* Date and Time */}
          <div className="flex flex-col gap-2">
            <label htmlFor="dateTime">
              Date & Time of Incident <span className="text-orange-600">*</span>
            </label>
            <input
              type="datetime-local"
              id="dateTime"
              name="dateTime"
              value={dateTime}
              onChange={(e) => {
                setDateTime(e.target.value);
              }}
              className="border py-2 px-5 rounded-md outline-none"
              required
            />
          </div>

          {/* Location */}
          <div className="flex flex-col gap-2">
            <label htmlFor="location">
              Location <span className="text-orange-600">*</span>
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
              className="border py-2.5 px-5 rounded-md outline-none"
              placeholder="Enter location"
              required
            />
          </div>

          {/* Crime Type */}
          <div className="flex flex-col gap-2">
            <label htmlFor="">
              Type of Crime <span className="text-orange-600">*</span>
            </label>

            <Select
              value={crimeType}
              required
              onValueChange={(value) => {
                setCrimeType(value);
                if (value === "others") {
                  setIsOtherSelected(true);
                } else {
                  setIsOtherSelected(false);
                  setOtherCrimeType("");
                }
              }}
            >
              <SelectTrigger className="border py-2.5 px-5 rounded-md outline-none focus:ring-0 focus:ring-offset-0">
                <SelectValue placeholder="Select a Crime Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="theft">Theft</SelectItem>
                <SelectItem value="assault">Assault</SelectItem>
                <SelectItem value="vandalism">Vandalism</SelectItem>
                <SelectItem value="others">Others</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {isOtherSelected && (
            <div className="flex flex-col gap-2">
              <label htmlFor="">
                Other: <span className="text-orange-600">*</span>
              </label>
              <input
                type="text"
                name="otherCrimeType"
                required={isOtherSelected}
                value={otherCrimeType}
                onChange={(e) => {
                  setOtherCrimeType(e.target.value);
                }}
                className="border py-2.5 px-5 rounded-md outline-none"
                placeholder="Enter type of crime"
              />
            </div>
          )}

          {/* Description */}
          <div className="flex flex-col gap-2">
            <label htmlFor="description">
              Description of Incident <span className="text-orange-600">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              className="w-full border py-2 px-5 rounded-md outline-none"
              placeholder="Enter description"
              required
            ></textarea>
          </div>

          {/* Suspect Description */}
          <div className="flex flex-col gap-2">
            <label htmlFor="suspectInfo">
              Suspect Description (if applicable)
            </label>
            <textarea
              id="suspectInfo"
              name="suspectInfo"
              value={suspectInfo}
              onChange={(e) => {
                setSuspectInfo(e.target.value);
              }}
              className="w-full border py-2 px-5 rounded-md outline-none"
              placeholder="Enter suspect description"
            ></textarea>
          </div>

          {/* Witness Information */}
          <div className="flex flex-col gap-2">
            <label htmlFor="witnessInfo">
              Witness Information (if available)
            </label>
            <textarea
              id="witnessInfo"
              name="witnessInfo"
              value={witnessInfo}
              onChange={(e) => {
                setWitnessInfo(e.target.value);
              }}
              className="w-full border py-2 px-5 rounded-md outline-none"
              placeholder="Enter suspect description"
            ></textarea>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="witnessInfo">Upload Evidence (if available)</label>
            <input
              type="file"
              id="evidence"
              name="evidence"
              onChange={(e) => {
                if (e.target.files) {
                  setFile(e.target.files[0]);
                }
              }}
              className="w-full h-full border py-2 px-5 rounded-md outline-none"
            />
          </div>

          <div className="md:col-span-2 flex flex-col gap-2 justify-end">
            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                id="declaration"
                name="declaration"
                required
              />
              <p>
                I declare that the information provided is true to the best of
                my knowledge.
              </p>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 bg-[#022444] text-white rounded-lg"
            >
              {loading ? "Loading..." : "Submit Report"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
