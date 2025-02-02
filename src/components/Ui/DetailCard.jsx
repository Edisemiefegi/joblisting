import React from "react";

function DetailCard({
  title,
  subtitle,
  location,
  description,
  extraTitle,
  extraText,
  type,
  company,
  companyDescription,
  email,
  phone,
}) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md space-y-4">
      {type === "job" ? (
        <>
          {subtitle && <p className="text-gray-600 text-sm">{subtitle}</p>}
          {title && <h1 className="font-semibold text-xl">{title}</h1>}
          {location && (
            <p className="text-red-600 flex items-center gap-2">
              <i className="pi pi-map-marker"></i> {location}
            </p>
          )}
          {description && <p className="text-gray-700">{description}</p>}
          {extraTitle && (
            <h2 className="text-blue-600 font-semibold mt-4">{extraTitle}</h2>
          )}
          {extraText && <p className="text-gray-600">{extraText}</p>}
        </>
      ) : (
        <>
          <h2 className="font-semibold text-lg">{title}</h2>
          <p className="font-semibold">{company}</p>
          <p className="text-gray-700">{companyDescription}</p>
          <hr className="border-gray-300" />

          <h3 className="font-semibold">{subtitle}</h3>
          <p className="p-2 bg-gray-100 text-sm font-medium">{email}</p>

          <h3 className="font-semibold mt-2">{subtitle}</h3>
          <p className="p-2 bg-gray-100 text-sm font-medium">{phone}</p>
        </>
      )}
    </div>
  );
}

export default DetailCard;
