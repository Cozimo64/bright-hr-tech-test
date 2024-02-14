
import { Document } from "../types/documents";

export const documentsData: Document[] = [
    {
      type: "pdf",
      name: "Employee Handbook",
      added: "2022-01-06",
      size: 1048576
    },
    {
      type: "pdf",
      name: "Public Holiday Policy",
      added: "2021-12-06",
      size: 524288
    },
    {
      type: "folder",
      name: "Expenses",
      added: "2022-05-02",
      files: [
        {
          type: "doc",
          name: "Expenses Claim Form",
          added: "2022-05-02",
          size: 204800
        },
        {
          type: "xlsx",
          name: "Fuel Allowances",
          added: "2022-05-03",
          size: 102400
        }
      ]
    },
    {
      type: "csv",
      name: "Cost Centres",
      added: "2020-08-12",
      size: 30720
    },
    {
      type: "folder",
      name: "HR Policies",
      added: "2022-03-11",
      files: [
        {
          type: "pdf",
          name: "Dress Code",
          added: "2022-03-11",
          size: 409600
        },
        {
          type: "pdf",
          name: "Remote Work Policy",
          added: "2022-04-22",
          size: 204800
        }
      ]
    },
    {
        type: "folder",
        name: "Misc",
        files: [
          {
            type: "txt",
            name: "Notes from the CEO",
            added: "2022-12-01",
            size: 63778
          },
          {
            type: "mov",
            name: "Welcome to the Company!",
            added: "2022-04-24",
            size: 1473741824
          }
        ]
      }

  ];
  