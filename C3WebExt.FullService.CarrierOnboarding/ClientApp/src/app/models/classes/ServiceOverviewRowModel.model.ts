import { ServiceOverwiewRow } from './ServiceOverviewRow.model';
import { IServiceOverviewRowModel } from '../interfaces/IServiceOverviewModel.interface';

export class ServiceOverviewRowModel implements IServiceOverviewRowModel{
  serviceOverviewRows: Array<ServiceOverwiewRow>;

  constructor(viewModel?: IServiceOverviewRowModel){
    if(viewModel)
    this.serviceOverviewRows= viewModel.serviceOverviewRows.map(x=> new ServiceOverwiewRow(x))
  }
}
