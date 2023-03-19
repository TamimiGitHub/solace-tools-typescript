import { 
  ChannelParameter, 
  Schema, 
} from '@asyncapi/parser';
import { 
  EpGeneralExtensions,
  EpParameterExtensions 
} from '../constants';

export class EpAsyncApiChannelParameterDocument {
  private channelParameterName: string;
  private asyncApiChannelParameter: ChannelParameter;

  constructor(channelParameterName: string, asyncApiChannelParameter: ChannelParameter) {
    this.channelParameterName = channelParameterName;
    this.asyncApiChannelParameter = asyncApiChannelParameter;
  }

  public validate(): void {
    // no validation
  }    

  public validate_BestPractices(): void {
    // no validation
  }

  public getAsyncApiChannelParameter(): ChannelParameter { return this.asyncApiChannelParameter; }

  public getDescription(): string {
    const description: string | null = this.asyncApiChannelParameter.description();
    if(description && description.length > 0) return description;
    return '';
  }

  public getDisplayName(): string {
    if(this.asyncApiChannelParameter.hasExtension(EpParameterExtensions.xEpEnumVersionDisplayName)) {
      const displayName = this.asyncApiChannelParameter.extension(EpParameterExtensions.xEpEnumVersionDisplayName);
      if(displayName && displayName.length > 0) return displayName;
    }
    return '';
  }

  // public getEpApplicationDomainId(): string | undefined {
  //   if(this.asyncApiChannelParameter.hasExtension(EpGeneralExtensions.xEpApplicationDomainId)) {
  //     const applicationDomainId = this.asyncApiChannelParameter.extension(EpGeneralExtensions.xEpApplicationDomainId);
  //     if(applicationDomainId && applicationDomainId.length > 0) return applicationDomainId;
  //   }
  // }

  public getEpApplicationDomainName(): string | undefined {
    if(this.asyncApiChannelParameter.hasExtension(EpGeneralExtensions.xEpApplicationDomainName)) {
      const applicationDomainName = this.asyncApiChannelParameter.extension(EpGeneralExtensions.xEpApplicationDomainName);
      if(applicationDomainName && applicationDomainName.length > 0) return applicationDomainName;
    }
  }

  public getParameterEnumValueList(): Array<string> {
    const schema: Schema = this.asyncApiChannelParameter.schema();
    const enumList: Array<string> | undefined = schema.enum();
    if(enumList === undefined) return [];
    return enumList;
  }

}
