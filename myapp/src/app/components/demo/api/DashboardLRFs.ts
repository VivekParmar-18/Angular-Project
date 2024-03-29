export interface DashboardLRFs {
    STUDY_NAME: string;
    VISIT_NAME: string;
    PID_NO: string;
    LRF_NUMBER: string;
    LRF_STATUS: string;
    LAST_USER: string;
    LAST_CHANGED_DATE: Date;
    LRF_STATUS_DATE: Date;
    HAC_ID: number;
    HAV_ID: number;
    SCD_BARCODE: string;
    SCL_CREATED_DATE: Date;
    SCL_SUBMITTED_DATE?: Date; // Optional property
  }
  